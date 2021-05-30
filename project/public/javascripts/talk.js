//发帖
function alert(){
    document.getElementById("talk1").style.display="block";
}

//评论
function alert1(){
    document.getElementById("talk2").style.display="block";
}

//
$.ajax({
    type:"GET",
    url:"/talk/discuss",
    success:function(data){
     $("#talk").empty();
     document.getElementById("talk").innerHTML = data.list.map(i =>`
     <tr>
           <td>${i.name}</td>
           <td>${i.title}</td>
           <td>${i.content}</td>
           <td>${i.comment}</td>
           <td>${i.like}</td>
           <td>
              <input type="button" value="删除" data-id="${i.title}" class="del_data">
              <input type="button" value="修改" data-id="${i.title}" class="update_data">
           </td>
     </tr> 
           `).join("");
  }
})

//发布内容
// function comeout(){
//     document.getElementById("talk1").style.display="none";

//     let addName=document.getElementById("name").value;
//     let addContent=document.getElementById("content").value;
//     let all = `<tr>
//             <td>${addName}</td>
//             <td>${addContent}</td>
//         </tr>`
//     document.getElementById("showData").innerHTML += all;
// }

//发布评论
// function comeout1(){
//     document.getElementById("talk2").style.display="none";

//     let addComment=document.getElementById("comment").value;
//     let addLike=document.getElementById("like").value;
//     let all = `<tr>
//             <td>${addComment}</td>
//             <td>${addLike}</td>
//         </tr>`
//     document.getElementById("showData").innerHTML += all;
// }