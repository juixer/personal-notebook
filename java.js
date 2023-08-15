function textAreaFun(textArea){
    const textAreaField = document.getElementById(textArea);
    return textAreaField;
}


document.getElementById('bold').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.fontWeight = 'bolder';
    const bold = document.getElementById('bold');
    const bold1 = document.getElementById('bold1');
    bold1.style.display = 'inline';
    bold.style.display = 'none';
    bold1.addEventListener('click', function(){
        textArea.style.fontWeight = 'normal';
        bold.style.display = 'inline';
        bold1.style.display = 'none';
    })
})

document.getElementById('italic').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.fontStyle = 'italic';
    const italic = document.getElementById('italic');
    const italic1 = document.getElementById('italic1');
    italic1.style.display = 'inline';
    italic.style.display = 'none';
    italic1.addEventListener('click', function(){
        textArea.style.fontStyle = 'normal';
        italic.style.display = 'inline';
        italic1.style.display = 'none';
    })
})
document.getElementById('underline').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textDecoration = 'underline';
    const underline = document.getElementById('underline');
    const underline1 = document.getElementById('underline1');
    underline.style.display = 'none';
    underline1.style.display = 'inline';
    underline1.addEventListener('click', function(){
        textArea.style.textDecoration = 'none';
        underline1.style.display = 'none';
        underline.style.display = 'inline';
    })
})



document.getElementById('right').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textAlign = 'right';
})
document.getElementById('left').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textAlign = 'left';
})
document.getElementById('center').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textAlign = 'center';
})
document.getElementById('justify').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textAlign = 'justify';
})



document.getElementById('text_tran').addEventListener('click', function(){
    const textArea = textAreaFun('text_area')
    textArea.style.textTransform = 'uppercase';
    const textTrans = document.getElementById('text_tran');
    const textTrans1 = document.getElementById('text_tran1');
    textTrans.style.display = 'none';
    textTrans1.style.display = 'inline';
    textTrans1.addEventListener('click', function(){
        textArea.style.textTransform = 'lowercase';
        textTrans1.style.display = 'none';
        textTrans.style.display = 'inline';
    })
})



document.getElementById('text_size').addEventListener('keyup', function(event){
    if(event.key === "Enter"){
        const sizeField = document.getElementById('text_size');
        const sizeString = sizeField.value;
        const size = sizeString + 'px';
        const textArea = textAreaFun('text_area')
        textArea.style.fontSize = size;
    }
})

document.getElementById('text_color').addEventListener('input', function () {
    const textColorInput = document.getElementById('text_color');
    const selectedColor = textColorInput.value;
    
    const textArea = textAreaFun('text_area');
    textArea.style.color = selectedColor;
});