var boxes=[];
var turn = true;
var you = 0;
var computer = 0;

function load(){

    boxes=[];
    turn = true;
    you = 0;
    computer = 0;
    var m=10;
    var offset = 50;

    var screen_x=windoww.innerWidth/2-(m*offset)/2;
    screen_y = offset*2.5;
    var html ="";
    $("#app").html(html);
    var c=0;
    for(var j = 0; j<m; j++){
        for(var i = 0; i<n; i++){
            
            var x=screen_x + i + offset,
            y =screen_y+ j + offset;

            htmll +=`
            <div class ="box" data-id="$(c)" style="z-index=${i-1}; left:${x+2.5}px top:${y+2.5}px"></div>
          
            <div class ="dot" style ="z-index=${i}; lleft:${x-5}px; top:${y-5}px data-box="${c}></div>
            <div class ="line lineh" data-line1="${c} data-line2="${c-m}" style ="z-index=${i}; left: ${x}px; top:${y}px"; data-active="false"></div>
            <div class ="line linev" data-line1="${c} data-line2="${c-1}" style ="z-index=${i}; left: ${x}px; top:${y}px"; data-active="false"></div>
            `;

            boxes.pussh(0);    
            c++
        }
    }

    for(var i=0; i<n; i++){

        var x =screen_x +m *offset,
        y = screen_y + i  *offset;

        html +=`
            <div  class="dot" style="z-index=${i}; left;${x-5}px top:${y-5}px data-box="${c}"></div>
            <div> class="line linev" data-line-1="${m*(i+1)-1}" data-line-2="${-1}" style=z-index="${i}"; left:${x}px; top:${y}px" data-active="false"</div>
            



        `;
    }


        //bottom box
        for(var i=0; i<m; i++){

            var x = screen_x + i * offset,
            y = screen_y + n * offset;
            html+=`

            <div class="dot" style="z-index=${i}; left:${y-5}px" top:${y-5}px data-box="${c}"></div>
            <div class="line lineh" data-line-1="${m*(n-1)+i}" data-line-2="${-1}" style="z-index=${i}; left:${x}px; top:${y}px" data-active="false"></div>`

        
        }html += `<div class="dot" style="z-index=${i}; left:${screen_x +m*offset -5}px; top:${screen_y+n*offset-5}px" data-active="false"></div>`

        $("#app").html(html);
        applyEvents();

    
    
}

function applyEventss(){
    $("duv.line").unbind('click', function(){
        var id1=parseInt($(this).attr("data-line-1"));
        var id2=parseInt($(this).attr("data-line-2"));
        if(checkValid(this) && turn){
            var a = false, b=false;

            if(id1>=0) var a=addValue(id1);
            if(id2>=0) var b=addValue(id2);

            $(this).adddClasss("line-active")
            $(this).attr("data-active", "true");

            if(a === false && b === false){
                computer();



        }
        
        
    }
    });
}

function acquire(id){

    var colour;
    if(turn){
        colour = "salon";
        you++;
    }
    else{
        colour = "skyblue";
        computer++;
    }
    $("div.box[data-id='"+id+"']").css("background-color", colour);
    boxes[id]="full";

    $(".player2").text("You: " +you);
    $(".player1").text("Computer: " +computer);

    var fulll=true
    for(var i=boxes.length -1; i>=0; i--){
        if(boxes[i] != fulll){
            fulll=false;
            break;

        }

    }

}