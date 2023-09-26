const tableBody = document.querySelector('.table');
const btnSortId = document.querySelector('.sorting-id');
const btnSortUserId = document.querySelector('.sorting-user-id');
const inputSearch = document.querySelector('.search');
const url = 'https://jsonplaceholder.typicode.com/posts';

let json = function (response) {
    return response.json()
}



fetch(url)
    .then(json)
    .then(function(data) {
        let newArr;

        let tableHeader = `<tr>
                                <th class="sorting-id">id</th>
                                <th class="sorting-user-id">userId</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>`

        //Добавление данных в таблицу
        let createArr = function (arr) {
            newArr = arr;
            arr.forEach((item) => {
                tableBody.innerHTML += `<tr>
                                            <td>${item.id}</td>
                                            <td>${item.userId}</td>
                                            <td>${item.title}</td>
                                            <td>${item.body}</td>
                                        </tr>`
            });
        }

        createArr(data);
        
        //Отслеживание поисковой строки
        inputSearch.addEventListener('keyup', () => {
            let textInput = inputSearch.value
            console.log(inputSearch.value);
            if (textInput.length >= 3) {
                let resultArr = data.filter((item) => {
                    if(item.body.includes(textInput) || item.title.includes(textInput)) {
                        return item;
                    }
                });
                tableBody.innerHTML = tableHeader;
                createArr(resultArr);
            }
            
        })

        //Сортировка по столбцам
        tableBody.addEventListener("click", (e) => {
            if(e.target.classList.contains('sorting-id')) {
                if (newArr[0].id < newArr[newArr.length-1].id) {
                    newArr.sort((a, b) => a.id < b.id ? 1 : -1);
                    tableBody.innerHTML = tableHeader;
                
                    createArr(newArr);
                } else if (newArr[0].id > newArr[newArr.length-1].id) {
                    newArr.sort((a, b) => a.id > b.id ? 1 : -1);
                    tableBody.innerHTML = tableHeader;
                
                    createArr(newArr);
                }
                
            }

            if(e.target.classList.contains('sorting-user-id')) {
                if (newArr[0].userId < newArr[newArr.length-1].userId) {
                    newArr.sort((a, b) => a.userId < b.userId ? 1 : -1);
                    tableBody.innerHTML = tableHeader;
                
                    createArr(newArr);
                } else if (newArr[0].userId > newArr[newArr.length-1].userId) {
                    newArr.sort((a, b) => a.userId > b.userId ? 1 : -1);
                    tableBody.innerHTML = tableHeader;
                
                    createArr(newArr);
                }
            }
        })

        
        
    })
    .catch(function (error) {
        console.log('error', error)
    })




