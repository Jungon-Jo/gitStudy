window.onload = function () {
    getTotalPage(numPerPage); openPage(1, 10);
}

let totalListCount = null;
const firstPage = 1;
const numPerPage = 10;

// page 번호 addEventListener 설정
const pageButton = document.getElementsByClassName("pageNumButton");

function getTotalPage(numPerPage = 10) {
    console.log("giveData")
    $.ajax({
        type: "GET",
        url: "/totalListCount",
        data: {numPerPage: numPerPage},
        dataType: "text",
        success: function(data) {
            totalListCount = parseInt(data);
            pagination(1);
        }
    })
}

function openPage(pageNum = 1, numPerPage = 10) {
    $.ajax({
        type: "GET",
        url: "/pagingBoard",
        data: {pageNum: pageNum, numPerPage: numPerPage},
        dataType: "json",
        success: function(data) {
            const tbody = $("#boardTable tbody")
            tbody.empty();
            data.forEach(function (board, index) {
                const row = `<tr>
                            <td>${board.id}</td>
                            <td>${board.title}</td>
                            <td>${board.content}</td>
                            <td>${board.writer}</td>
                            <td>${board.createdAt}</td>
                            </tr>`
                tbody.append(row);
            });

            pageButton.style.color = "black";
            document.getElementById(pageNum.toString()).style.color = "red";
        },
        error: function(xhr, status, error) {
            alert("목록 로딩 실패: " + error);
        }
    });
}

function pagination(pageNum = 1) {
    const bundlePageNum = Math.floor(pageNum / 10) * 10;
    const pagingNum = document.getElementById("pagingNum")
    for(let i = 1 ; i < 10 ; i++) {
        let presentPage = bundlePageNum + i;
        if(presentPage <= totalListCount) {
            const viewPageNum = document.createElement("li");
            viewPageNum.id = presentPage.toString();
            viewPageNum.textContent = presentPage.toString();
            viewPageNum.className = "pageNumButton";
            // `<li id="${bundlePageNum + i}">bundlePageNum + i</li>`
            viewPageNum.addEventListener("click", function () {
                openPage(bundlePageNum + i, numPerPage)
            });
            pagingNum.appendChild(viewPageNum);
        } else {
            break;
        }
    }
}

function openFirstPage(firstPage, numPerPage) {
    document.querySelectorAll(".pageNumButton").forEach(btn => {
        btn.style.color = "black";
    });
    document.getElementById(firstPage.toString()).style.color = "red";
    openPage(firstPage, numPerPage);
}

function lastPage() {
    console.log("gitTest")
}

function afterPage() {
    console.log("gitTest1")
}

function beforePage() {

}


// $(document).ready(function(){
//     getTotalPage(numPerPage);
// });

// $(document).ready(function(){
//     pagination(1); openPage(1, 10)
// });



