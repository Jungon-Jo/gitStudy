-- SPRING_SESSION 테이블
CREATE TABLE IF NOT EXISTS SPRING_SESSION (
                                              PRIMARY_ID CHAR(36) NOT NULL,
    SESSION_ID CHAR(36) NOT NULL,
    CREATION_TIME BIGINT NOT NULL,
    LAST_ACCESS_TIME BIGINT NOT NULL,
    MAX_INACTIVE_INTERVAL INT NOT NULL,
    EXPIRY_TIME BIGINT NOT NULL,
    PRINCIPAL_NAME VARCHAR(100),
    CONSTRAINT SPRING_SESSION_PK PRIMARY KEY (PRIMARY_ID)
    ) ENGINE=InnoDB;

-- SPRING_SESSION_IX1 존재하지 않으면 생성
SET @index_exists := (SELECT COUNT(*)
                      FROM information_schema.statistics
                      WHERE table_schema = DATABASE()
                      AND table_name = 'SPRING_SESSION'
                      AND index_name = 'SPRING_SESSION_IX1');
SET @sql := IF(@index_exists = 0,
               'CREATE UNIQUE INDEX SPRING_SESSION_IX1 ON SPRING_SESSION (SESSION_ID);',
               'SELECT "SKIP SPRING_SESSION_IX1";');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- SPRING_SESSION_IX2
SET @index_exists := (SELECT COUNT(*)
                      FROM information_schema.statistics
                      WHERE table_schema = DATABASE()
                      AND table_name = 'SPRING_SESSION'
                      AND index_name = 'SPRING_SESSION_IX2');
SET @sql := IF(@index_exists = 0,
               'CREATE INDEX SPRING_SESSION_IX2 ON SPRING_SESSION (EXPIRY_TIME);',
               'SELECT "SKIP SPRING_SESSION_IX2";');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- SPRING_SESSION_IX3
SET @index_exists := (SELECT COUNT(*)
                      FROM information_schema.statistics
                      WHERE table_schema = DATABASE()
                      AND table_name = 'SPRING_SESSION'
                      AND index_name = 'SPRING_SESSION_IX3');
SET @sql := IF(@index_exists = 0,
               'CREATE INDEX SPRING_SESSION_IX3 ON SPRING_SESSION (PRINCIPAL_NAME);',
               'SELECT "SKIP SPRING_SESSION_IX3";');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- SPRING_SESSION_ATTRIBUTES 테이블
CREATE TABLE IF NOT EXISTS SPRING_SESSION_ATTRIBUTES (
                                                         SESSION_PRIMARY_ID CHAR(36) NOT NULL,
    ATTRIBUTE_NAME VARCHAR(200) NOT NULL,
    ATTRIBUTE_BYTES BLOB NOT NULL,
    CONSTRAINT SPRING_SESSION_ATTRIBUTES_PK PRIMARY KEY (SESSION_PRIMARY_ID, ATTRIBUTE_NAME),
    CONSTRAINT SPRING_SESSION_ATTRIBUTES_FK FOREIGN KEY (SESSION_PRIMARY_ID)
    REFERENCES SPRING_SESSION (PRIMARY_ID) ON DELETE CASCADE
    ) ENGINE=InnoDB;
