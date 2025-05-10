
document.querySelectorAll('.increase-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    return countSpan.textContent
  
  });
});

document.querySelectorAll('.decrease-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
      count--;
      countSpan.textContent = count;
      return countSpan.textContent
    }
  });
});
function order (button) {
  let c1 = button.closest(".card");
  let m1 = c1 .querySelector (".s").textContent;
  let p1 = parseInt(c1.querySelector (".flip-btn").textContent);
  let q1 = parseInt (c1.querySelector(".count").textContent);
  let ob = { m1,p1,q1 }
  let G =JSON.stringify (ob);
  localStorage.setItem ("order",JSON.stringify (ob));
  localStorage.getItem ("order",JSON.stringify (ob));
  console.log (ob) ;
  
}


// تفعيل الحركات عند ظهور الجمل أو العناصر المحددة
const elementsToAnimate = document.querySelectorAll('.typewriter, .jump');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);  
    }
  });
}, { threshold: 0.5 }); 

elementsToAnimate.forEach(element => {
  observer.observe(element);
});


// search bar
// function searchFood() {
//   const searchInput = document.getElementById('searchInput').value.toLowerCase();
//   const div1Foods = document.getElementById('main-menu').querySelectorAll('.n1');
//   const div2Foods = document.getElementById('light-side').querySelectorAll('.s');

//   let found = false;

//   // البحث في الـ div الأول
//   for (const food of div1Foods) {
//     const foodName = food.textContent.toLowerCase().trim();
//     if (foodName.includes(searchInput)) {
//       selectAndScroll(food);
//       found = true;
//       break;
//     }
//   }

//   // لو ما لقيناهاش في الأول هنبحث في الـ div التاني
//   if (!found) {
//     for (const food of div2Foods) {
//       const foodName = food.textContent.toLowerCase().trim();
//       if (foodName.includes(searchInput)) {
//         selectAndScroll(food);
//         found = true;
//         break;
//       }
//     }
//   }

//   // لو ما لقيناهاش خالص نعرض رسالة
//   if (!found) {
//     alert('Sorry!Not found');
//   }
// }

// function selectAndScroll(element) {
//   // إزالة أي تحديد سابق
//   const selected = document.querySelector('.selected');
//   if (selected) {
//     selected.classList.remove('selected');
//   }

//   // إضافة كلاس التحديد للعنصر الحالي
//   element.classList.add('selected');

//   // عمل سكرول للعنصر
//   element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
// }

function previewSelectFood() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const div1Foods = document.querySelectorAll('#main-menu .n1');
      const div2Foods = document.querySelectorAll('#light-side .s');
      const allFoods = [...div1Foods, ...div2Foods];

      // Remove old selection
      allFoods.forEach(food => food.classList.remove('selected'));

      // select same
      allFoods.forEach(food => {
        const foodName = food.textContent.toLowerCase().trim();
        if (searchInput !== '' && foodName.includes(searchInput)) {
          food.classList.add('selected');
        }
      });
    }

    function searchFood() {
      const selectedFoods = document.querySelectorAll('.selected');
      
      if (selectedFoods.length > 0) {
      
        selectedFoods[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        
        alert('No results found');
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('searchInput').addEventListener('input', previewSelectFood);

      document.getElementById('searchButton').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent scroll untill submit
        searchFood(); // Call the scroll 
      });
    });


function order (button){
  let c1=button.closest(".card");
  let m1=c1.querySelector(".s").textContent;
  let p1=parseInt(c1.querySelector(".flip-btn").textContent);
  let q1=parseInt(c1.querySelector(".count").textContent);
  let ob={
      m1,p1,q1
  }
   let jsonorder=JSON.stringify(ob);
  // let c=JSON.parse(localStorage.getItem("orders"));
  // let cindex=c.findIndex(order=>order.name===name);
  // if(cindex!==-1){
      // c[cindex]=neworder;
  // }
  // else{
      // c.push(neworder);
  // }
  localStorage.setItem("order",JSON.stringify(ob));
  localStorage.getItem("order",JSON.stringify(ob));
  window.location.href= "../order/order.html";
  console.log(ob);

}

function Go (){
  window.location.href= "../order/order.html"

}
