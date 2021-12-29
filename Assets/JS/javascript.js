const itemHTML = `
    <li>
        <div class="products-image">
            <img src="assets/images/gold finger ring.png" alt="Gold finger ring">
        </div>
        <img src="assets/images/5-stars.png" alt="5-stars">
        <h4>Gold finger ring</h4>
        <span>Rs.637/-</span>
        <a href="#">Add to cart</a>
    </li>
`

const ListItem = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10"
];

const listElement = document.querySelector('#list');
const paginationElement = document.querySelector('#pagination');

let currentPage = 1;
let rows = 5;

function displayList (items, wrapper, rowsPerPage, page){
    wrapper.innerHTML = "";
    page--;
    
    let start  = rowsPerPage * page;
    let end = start + rowsPerPage;
    // let paginatedItems = items.slice(start, end);

    const itemHTML = `
        <li>
            <div class="products-image">
                <img src="assets/images/gold finger ring.png" alt="Gold finger ring">
            </div>
            <img src="assets/images/5-stars.png" alt="5-stars">
            <h4>Gold finger ring</h4>
            <span>Rs.637/-</span>
            <a href="#">Add to cart</a>
        </li>
    `

    for(let i = 0; i < 4; i++){
        wrapper.innerHTML = itemHTML
    }
}

displayList(itemHTML, listElement, rows, currentPage)