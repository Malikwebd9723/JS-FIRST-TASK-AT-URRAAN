para2.style.display = 'none';
para3.style.display = 'none';
function toggleHide(_id){
    para1 = document.getElementById('para1');
    para2 = document.getElementById('para2');
    para3 = document.getElementById('para3');
    


    if(_id == 'btn1' && para1.style.display != 'none'){
        para1.style.display = 'none';
    }
    else{
        para1.style.display = 'block';
    }

    if(_id == 'btn2' && para2.style.display != 'block'){
        para2.style.display = 'block';
        para1.style.display = 'none';
    }
    else{
        para2.style.display = 'none';
    }

    if(_id == 'btn3' && para3.style.display != 'block'){
        para3.style.display = 'block';
        para1.style.display = 'none';
    }
    else{
        para3.style.display = 'none';
    }
}