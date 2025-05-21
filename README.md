
my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test
$ git clone https://github.com/Jungon-Jo/gitStudy.git
Cloning into 'gitStudy'...
remote: Enumerating objects: 59, done.
remote: Counting objects: 100% (59/59), done.
remote: Compressing objects: 100% (44/44), done.
remote: Total 59 (delta 1), reused 59 (delta 1), pack-reused 0 (from 0)
Receiving objects: 100% (59/59), 4.23 MiB | 11.14 MiB/s, done.
Resolving deltas: 100% (1/1), done.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test
$ git branch
fatal: not a git repository (or any of the parent directories): .git

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test
$ cd gitStudy/

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (main)
$ git branch
* main

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (main)
$ git checkout develop
Switched to a new branch 'develop'
branch 'develop' set up to track 'origin/develop'.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git branch
* develop
  main

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git branch jungon

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git branch
* develop
  jungon
  main

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git switch jungon
Switched to branch 'jungon'

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git push origin develop
Everything up-to-date

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git add .

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git commit -m "gitTest"
On branch jungon
nothing to commit, working tree clean

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git push -u origin jungon
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: Create a pull request for 'jungon' on GitHub by visiting:
remote:      https://github.com/Jungon-Jo/gitStudy/pull/new/jungon
remote:
To https://github.com/Jungon-Jo/gitStudy.git
 * [new branch]      jungon -> jungon
branch 'jungon' set up to track 'origin/jungon'.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git add *

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git add *

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git commit -m "gitTest1"
On branch jungon
Your branch is up to date with 'origin/jungon'.

nothing to commit, working tree clean

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git add .

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git commit -m "gitTest"
[jungon 2dff54f] gitTest
 17 files changed, 64 insertions(+), 2 deletions(-)
 create mode 100644 .gradle/8.13/checksums/checksums.lock
 create mode 100644 .gradle/8.13/executionHistory/executionHistory.lock
 create mode 100644 .gradle/8.13/fileChanges/last-build.bin
 create mode 100644 .gradle/8.13/fileHashes/fileHashes.lock
 create mode 100644 .gradle/8.13/gc.properties
 create mode 100644 .gradle/buildOutputCleanup/buildOutputCleanup.lock
 create mode 100644 .gradle/buildOutputCleanup/cache.properties
 create mode 100644 .gradle/vcs-1/gc.properties
 create mode 100644 .idea/.gitignore
 create mode 100644 .idea/.name
 create mode 100644 .idea/compiler.xml
 create mode 100644 .idea/gradle.xml
 create mode 100644 .idea/misc.xml
 create mode 100644 .idea/vcs.xml
 create mode 100644 build/tmp/bootWar/MANIFEST.MF
 create mode 100644 build/tmp/war/MANIFEST.MF

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git switch develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git pull origin develop
From https://github.com/Jungon-Jo/gitStudy
 * branch            develop    -> FETCH_HEAD
Already up to date.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (develop)
$ git switch jungon
Switched to branch 'jungon'
Your branch is ahead of 'origin/jungon' by 1 commit.
  (use "git push" to publish your local commits)

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git merge develop
Already up to date.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git push -u origin develop
Everything up-to-date
branch 'develop' set up to track 'origin/develop'.

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git log --oneline
2dff54f (HEAD -> jungon) gitTest
e0cbc33 (origin/test, origin/main, origin/jungon, origin/develop, origin/HEAD, main, develop) first Commit

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git log --oneline --graph --all --decorate
* 2dff54f (HEAD -> jungon) gitTest
* e0cbc33 (origin/test, origin/main, origin/jungon, origin/develop, origin/HEAD, main, develop) first Commit

my@DESKTOP-PMIEQB3 MINGW64 /c/Study/test/gitStudy (jungon)
$ git push -u origin jungon
Enumerating objects: 40, done.
Counting objects: 100% (40/40), done.
Delta compression using up to 8 threads
Compressing objects: 100% (17/17), done.
Writing objects: 100% (33/33), 3.08 KiB | 1.02 MiB/s, done.
Total 33 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/Jungon-Jo/gitStudy.git
   e0cbc33..2dff54f  jungon -> jungon
branch 'jungon' set up to track 'origin/jungon'.

