let main_parent_div = document.createElement("div");
main_parent_div.setAttribute("id","parentdiv");

let child_div = document.createElement("div");
child_div.setAttribute("id","childdiv");

let title_content = document.createElement("h2");
title_content.innerText = "Frequently Asked Questions FAQ's";
title_content.setAttribute("id","titlecontent");

let child2_div = document.createElement("div");
child2_div.setAttribute("id","child2div");

let inner_child1 = document.createElement("div");
inner_child1.setAttribute("id","innerchild1");

let para1 = document.createElement("h3");
para1.innerText = "Do You Accept All Major Credit Cards?";
para1.setAttribute("id","para1");

let para1_button = document.createElement("button");
para1_button.innerHTML=`<i class="far fa-plus-square" style="color: #FFA500;"></i>`
para1_button.setAttribute("class","btn");

let inner_para1 = document.createElement("div");
inner_para1.setAttribute("id","innerpara1");

let p1 = document.createElement("p");
p1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
p1.setAttribute("class","p");

let inner_child2 = document.createElement("div");
inner_child2.setAttribute("id","innerchild2");

let para2 = document.createElement("h3");
para2.innerText = "Do You Support Local Farmers?";
para2.setAttribute("id","para2");

let para2_button = document.createElement("button");
para2_button.innerHTML=`<i class="far fa-plus-square" style="color: #FFA500;"></i>`
para2_button.setAttribute("class","btn")

let inner_para2 = document.createElement("div");
inner_para2.setAttribute("id","innerpara2");

let p2 = document.createElement("p");
p2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
p2.setAttribute("class","p");

let inner_child3 = document.createElement("div");
inner_child3.setAttribute("id","innerchild3");

let para3 = document.createElement("h3");
para3.innerText = "Do You Use Organic Ingredients?";
para3.setAttribute("id","para3");

let para3_button = document.createElement("button");
para3_button.innerHTML=`<i class="far fa-plus-square" style="color: #FFA500;"></i>`
para3_button.setAttribute("class","btn")

let inner_para3 = document.createElement("div");
inner_para3.setAttribute("id","innerpara3");

let p3 = document.createElement("p");
p3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
p3.setAttribute("class","p");

inner_child3.append(para3,para3_button);
inner_para3.append(p3);
inner_child2.append(para2,para2_button);
inner_para2.append(p2);
inner_child1.append(para1, para1_button);
inner_para1.append(p1);
child2_div.append(inner_child1,p1,inner_child2,p2,inner_child3,p3);
child_div.append(title_content);
main_parent_div.append(child_div,child2_div);
document.body.append(main_parent_div);

// let btn = document.getElementsByTagName("button");
// btn.innerHTML = `<i class="far fa-plus-square" style="color: #FFA500;"></i>`;
// btn.setAttribute = ("id","btn")

let para = document.querySelectorAll(".p");
let btn = document.querySelectorAll("button");
console.log(btn);
btn.forEach((button,index) => {

    button.addEventListener("click",()=>{
        btnclick(index)
});
});

function btnclick(index)
{
    para.forEach((paragraph, i) => {
        if(i !== index)
        {
            paragraph.classList.remove("active");
        }
    });
    para[index].classList.toggle(`active`);
}







