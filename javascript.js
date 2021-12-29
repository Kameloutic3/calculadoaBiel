/* Terminando projeto */
let $get = item => document.querySelector(item);
let $getAll = item => document.querySelectorAll(item);
let $posicao = 0;
$get('.move--ball').addEventListener('click', ()=>{
    $posicao++;
    if($posicao == 1){
        ThemeOne();
    }else if($posicao == 2){
        ThemeTwo();
    }else{
        ThemeThree();
        $posicao = 0;
    }
});

function ThemeOne(){
    $get('.move--ball').classList.add('rightThirty');
    $get('.move--ball').classList.remove('rightZero');
    $get('.move--ball').classList.remove('leftZero');
    $get('.area--calculadora').
        style.backgroundColor = '#e6e6e6';
    document.body.style.backgroundColor = '#e6e6e6';
    $get('.title--calculadora').style.color = 'black';

    // Mudança de cor
    $get('.tela').style.color = 'black';
    $get('.tela').style.backgroundColor = '#eeeeee';
    $get('.botoes').style.backgroundColor = '#d3cdcd';
    $getAll('.option').forEach((item)=>{
        item.style.color = 'black';
    });
    $get('.tema').style.color = 'black';
    $get('.del').classList.add('colorTwo');
    $get('.comum').classList.add('colorTwo');
    $get('.comum--Red').classList.add('colorTwoRed');
    $get('.colorTheme--calculadora').style.backgroundColor = '#d3cdcd';
    $get('.move--ball').style.backgroundColor = '#d65804';

    $get('.del').classList.remove('colorComumThree');
    $get('.comum').classList.remove('colorComumThree');
    $get('.comum').classList.remove('unico');
    $get('.comum--Red').classList.remove('colorThreeRed4');
}

function ThemeTwo(){
    $get('.move--ball').classList.remove('rightThirty');
    $get('.move--ball').classList.add('rightZero');
    $get('.move--ball').classList.remove('leftZero');
    $get('.area--calculadora').
        style.backgroundColor = '#17062a';
    document.body.style.backgroundColor = '#17062a';
    $get('.title--calculadora').style.color = '#ffed45';

    // Mudança de cor
    $get('.tela').style.color = '#f8e04a';
    $get('.tela').style.backgroundColor = '#1e0836';
    $get('.botoes').style.backgroundColor = '#1e0836';
    $getAll('.option').forEach((item)=>{
        item.style.color = '#ffed45';
    });
    $get('.tema').style.color = '#ffed45';
    $get('.del').classList.add('colorTwo');
    $get('.comum').classList.add('colorThree');
    $get('.comum').classList.add('unico');
    $get('.comum--Red').classList.add('colorThreeRed');
    $get('.colorTheme--calculadora').style.backgroundColor = '#1e0836';
    $get('.move--ball').style.backgroundColor = '#00dacd';
    $getAll('.botao').forEach((item)=>{
        item.classList.remove('colorBotoesThree');
        item.classList.add('botoesThree');
    })

    $get('.del').classList.remove('colorComumThree');
    $get('.comum').classList.remove('colorComumThree');
    $get('.comum').classList.remove('unico');
    $get('.comum--Red').classList.remove('colorThreeRed4');
    $get('.del').classList.remove('colorTwo');
    $get('.comum').classList.remove('colorTwo');
    $get('.comum--Red').classList.remove('colorTwoRed');
}

function ThemeThree(){
    $get('.move--ball').classList.remove('rightThirty');
        $get('.move--ball').classList.remove('rightZero');
        $get('.move--ball').classList.add('leftZero');
        $get('.area--calculadora').
            style.backgroundColor = '#3b4664';
        document.body.style.backgroundColor = '#3b4664';
    $get('.title--calculadora').style.color = 'white';

    // Mudança de cor
    $get('.tela').style.color = 'white';
    $get('.tela').style.backgroundColor = '#181f32';
    $get('.botoes').style.backgroundColor = '#252d44';
    $getAll('.option').forEach((item)=>{
        item.style.color = 'white';
    });
    $get('.tema').style.color = 'white';
    $get('.del').classList.add('colorComumThree');
    $get('.comum').classList.add('colorComumThree');
    $get('.comum').classList.add('unico');
    $get('.comum--Red').classList.add('colorThreeRed4');
    $get('.colorTheme--calculadora').style.backgroundColor = '#252d44';
    $get('.move--ball').style.backgroundColor = '#d53f27';
    $getAll('.botao').forEach((item)=>{
        item.classList.remove('botoesThree');
        item.classList.add('colorBotoesThree');
    })
    $get('.del').classList.remove('colorTwo');
    $get('.comum').classList.remove('colorTwo');
    $get('.comum--Red').classList.remove('colorTwoRed');
}   

/* Programming in Code */

let input = $get('.tela');
let calc = false;

function botao(click){

    if(vefClick(input.innerHTML, click)){
        input.innerHTML += click;
        vefInput();
    }
}

function vefInput(){
    let qntNumber = 0;
    let qntNoNumber = 0;
    let arraySplit = input.innerHTML.split(' ');
    arraySplit = arraySplit.filter((item)=>{
        return item != '';
    })
    console.log(arraySplit)

    for(let i in arraySplit){
        if(vefTermo(arraySplit[i])){
            qntNoNumber++;
        }else{
            qntNumber++;
        }
    }
    console.log("qntNum: "+qntNumber);
    console.log("qntNoNuM "+qntNoNumber);
    console.log("Tamanho: "+arraySplit.length)
    if((qntNumber - qntNoNumber) == 1 && (arraySplit.length > 2)){
        calc = true;
    }else{
        calc = false;
    }
}

function vefTermo(element){
    if(element == '+') return 1;
    if(element == '-') return 1;
    if(element == '*') return 1;
    if(element == '/') return 1;
    return 0;
}

$get('.comum--Red').addEventListener('click', ()=>{
    if(calc ==  true){
        input.innerHTML = eval(input.innerHTML);
        calc = false;
    }
});

$get('.comum').addEventListener('click', ()=>{
    input.innerHTML = '';
});

$get('.del').addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML.
        substring(0, input.innerHTML.length-1);
});

function vefClick(entrada, click){
    if(entrada.length == 0 && click == ' + ') return 0;
    if(entrada.length == 0 && click == ' - ') return 0;
    if(entrada.length == 0 && click == ' x ') return 0;
    if(entrada.length == 0 && click == ' * ') return 0;
    if(entrada.length == 0 && click == '.') return 0;
    return 1;
}


 