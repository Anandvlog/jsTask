let expenses =JSON.parse( localStorage.getItem("expenses")) || [];
const totalExpense=document.querySelector("#totalExpense")



let selectedMonth=null;


const expenseForm=document.querySelector("#form")

const monthFilter=document.querySelector('#monthFilter');

function calculateTotalExpense(data){
    console.log(data);
    
   const total=data.reduce((a,b)=>{
    return a+b.amount
   },0)

   totalExpense.textContent=`Total ₹${total}`

}

monthFilter.addEventListener('change',(e)=>{
     selectedMonth=Number(e.target.value)
    console.log(selectedMonth);
    renderExpenses()    
})




renderExpenses()

const d=new Date("2026-07-31");

console.log(d.getMonth());


function saveExpenses(){
    localStorage.setItem("expenses",JSON.stringify(expenses))
}

//deleteExpense
function deleteExpense(id){
expenses=expenses.filter((expense)=> expense.id !== id )
console.log(expenses);
saveExpenses()
 renderExpenses()
}

function renderExpenses(){
    const container=document.querySelector('#expenseContainer');
    container.innerHTML=""
    let dataToRender=[];
    
    
    if(selectedMonth){

        dataToRender=expenses.filter((expense)=>{
            
            const d=new Date(expense.date)
            return d.getMonth()+1 === selectedMonth;

        })
   }else{
    
        dataToRender=expenses

   }
   calculateTotalExpense(dataToRender)
   for(const expense of dataToRender){
    const card=document.createElement("div");
    const h1=document.createElement("h1");
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    const button=document.createElement('button')
    h1.textContent=expense.name;
    card.append(h1)
    p1.textContent=`₹${expense.amount}`
    p2.textContent=expense.date;
    p3.textContent=expense.category;
    button.textContent='Delete'

   button.className =
    "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-3";

    h1.className = "text-xl font-semibold mb-2";
  card.className =
    "bg-white shadow-md rounded-lg p-4 border border-gray-200";
    card.append(p1)
    card.append(p2)
    card.append(p3)
    card.append(button)

    p1.className = "text-gray-700";
     p2.className = "text-gray-600";
    p3.className = "text-blue-600 font-medium";
    
    container.append(card)

    button.addEventListener('click',()=>{
        deleteExpense(expense.id)
    })

   }

   
    
}


function addExpense(){
 const formData=new FormData(expenseForm)
    const name=formData.get('name')
    const amount=formData.get('amount')
    const date=formData.get('date')
    const category=formData.get('category')
    
    
    if(name.trim() === "" || amount <=0 || category === null || !date){
        alert(`fill form`)
    }else{
        
        const obj={
        id:Date.now(),
        name,
        amount:Number(amount),
        date,
        category

    }
        expenses.push(obj)
        saveExpenses()
    }
    renderExpenses()
    expenseForm.reset()
    
}

expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    addExpense()
    
})