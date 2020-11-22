
class Person{
  constructor(){
   this.lists=[];
   this.count=0;
  }
  showMessage(){ 

    var e = document.getElementById("btn")
    e.style.display = 'none';
    var msg_wrap = document.createElement("div")
    msg_wrap.style.float="left"
    msg_wrap.className="list-card"
    msg_wrap.id="first"+(this.count  + 1)
    var message = document.createElement("ul")
    var element1 = document.createElement("li");
    var element2 = document.createElement("li");
    var input = document.createElement("TEXTAREA");
    message.id="msg"+(this.count +1) 
    message.className="msg" 
    input.id="txt"+(this.count +1)
    input.className="title-add"
  
    setTimeout(() => {
    input.focus()}, 1000000);

    var btnAddList = document.createElement("BUTTON");
    btnAddList.id="add"+(this.count +1);
    btnAddList.className="add";
    btnAddList.innerHTML="Add";
    element1.appendChild(input);
    element2.appendChild(btnAddList);
    message.appendChild(element1);
    message.appendChild(element2);

   msg_wrap.appendChild(message);
   var c=document.getElementById('container')
   c.className="container"
   c.style.display="block"
   c.appendChild(msg_wrap)
   document.body.appendChild(c);
   
   $(document).mouseup((e)=>{
    if(msg_wrap !=(e.target) && msg_wrap.contains(e.target) === false){
  }
 })
input.addEventListener("keyup", (event)=> {
  if (event.keyCode === 13) {
   event.preventDefault();
    this.hide()
  }
});
  
   document.getElementById("add"+(this.count+1)).onclick = () => this.hide()
}


  hide(){
      this.hideshow()
  }
  hideshow(){
        
      let  b = document.getElementById('msg'+(this.count+1));
      b.style.display = 'none';
      
         
      let  btn = document.getElementById('btn');
      btn.style.float="left"
      btn.style.display="block"
      document.body.appendChild(btn);
      this.addAList(this.count +1)
  }

addAList(currentCount){
     this.count++
     var name = document.getElementById("txt"+currentCount).value;
     this.name=name
     let list = new List(this.name);
     this.lists.push(list)
     var cont=document.getElementById('container');
     var listTitle = document.createElement("div");
     listTitle.style.float="left"
     var listTitleup = document.createElement("div");
     var listTitlemidd= document.createElement("div");
     listTitlemidd.style.display="none"
     listTitlemidd.id="cards-list"+this.count
     listTitlemidd.className="cards-list-canves"
     var listTitlebottom = document.createElement("div");
     var btnAddCard = document.createElement("BUTTON");
     btnAddCard.id="addcard"+this.count;
     btnAddCard.className="addcard"; 
     btnAddCard.innerHTML="+ Add a card";
    //////////
     var message = document.createElement("div");
     var wrap = document.createElement("div");
     wrap.id="wrap"+this.count
     wrap.className="wrap"
     var element1 = document.createElement("li");
     var element2 = document.createElement("li");
     var input = document.createElement("TEXTAREA");
     message.id="msg-add"+currentCount  
     message.className="msg"  
     input.id="txt-add"+currentCount
     input.className="txt-add"
     wrap.appendChild(element1);
     wrap.appendChild(element2);
     message.appendChild(wrap)  
    /////////////////
        listTitlebottom.appendChild(btnAddCard)
        listTitlebottom.appendChild(message)
        btnAddCard.style.display="block"
        message.style.display="none"
        listTitle.id="card"+currentCount
        listTitle.className="card"
        listTitleup.id="up"+currentCount
        listTitleup.className="up"
        listTitlebottom.id="down"+currentCount
        listTitlebottom.className="down"
        listTitleup.innerHTML = this.lists[currentCount -1 ].name;//action
        
         var msg= document.getElementById("first"+currentCount);
         listTitle.appendChild(listTitleup)
         listTitle.appendChild(listTitlemidd)
         listTitle.appendChild(listTitlebottom)
     
         msg.appendChild(listTitle);
         cont.appendChild(msg)
         document.getElementById("addcard"+currentCount).onclick = () => this.hideCard(currentCount)
         
      
   
}
hideCard(currentCount){
  console.log(currentCount)
  var e = document.getElementById('addcard'+currentCount);
  e.style.display = 'none';
  var m = document.getElementById('msg-add'+currentCount);
  m.style.display = 'block';
  document.getElementById("msg-add-btn"+currentCount).onclick = () => this.init(currentCount)
}

async init(currentCount){
  await this.addCard(currentCount);
  this.show(currentCount)
}

addCard(currentCount){

  return new Promise((resolve,reject)=>{
    var name = document.getElementById("txt-add"+this.count).value;
    this.name=name
    var card = new Card(this.name)
    this.lists[currentCount -1].cards.push(card)
    if(true){
      resolve()
    }
    else{
      reject();
    }  
})
}


show(currentCount){
var card=document.getElementById('cards-list'+this.count)
card.style.display="block"
var e = document.getElementById('addcard'+this.count);
e.style.display = 'block';
var m = document.getElementById('msg-add'+this.count);
m.style.display = 'none';
  let  elementCard= document.createElement("div");
  elementCard.contentEditable = "true";
  elementCard.setAttribute("contenteditable", "true");
  elementCard.className="showid"
  console.log(this.lists[currentCount-1].cards)
  let count_card = this.lists[currentCount-1].cards.length - 1
  elementCard.innerHTML=this.lists[currentCount-1].cards[count_card].name;
  card.appendChild(elementCard)
}
}