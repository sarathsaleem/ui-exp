/**
 * @author saraths
 */
 
 
refference={
	_init:{
		
	
	},	
 _animations:{
		title:function(){
					$("h1.reff").animate({			
							width:"767px"					
						},400);
						this.dur=500;
			},			
		lists:function(){
						this.len=$(".allList").children().length;
						this.current=$(".allList li.mainList:nth-child(1)");		//allList--mainList----id--Gen
						this.width=0;
						this.height=0;
							for(i=1;i<=this.len;i++)
							{
								this.dur=this.dur+100;
								$(".mainList").css({position:"absolute"}).fadeIn(1000);
								this.current.animate({
								left:this.width+"px",
								top:this.height+"px"		
								},this.dur);
								this.current=this.current.next();
								this.width+=256;
								if(i%3==0)//---------change 3--Gen
								{
									this.height=this.height+306;
									this.width=0;
								}
							}
			},
			hoverExp:function(item){					
						$(item).animate({
								opacity:"1"
								},100).nextAll().animate({
								opacity:".2"						
								},350);
							$(item).prevAll().animate({
								opacity:".2",},350);	
							
			},
			fullScreen:function(item){
			
				$("h1.reff").fadeOut().fadeIn().text(""+$(item).find("h1").text()+"");
				$(item).parent().children().animate({top:item.offsetTop+"px",left:item.offsetLeft+"px"},1000).animate(
					{top:"0px",
					left:"250px"},500).slideUp();			
				$(".mainList").fadeOut();
				$("#containerWrapper").animate({width:"770px"
				,height:"100%",
				top:"0px"}
				,3000).fadeIn(3000);			
				setTimeout('$("#container").slideDown(2000)',2000);
				$("#dashboard ").fadeIn("slow");
			
			},
			more:function(item){				
				$(item).addClass("hide").parent().find(".descrrption").slideDown();	

			},
			hide:function(item){				
				$(item).removeClass("hide").parent().find(".descrrption").slideUp();	

			}
	
 
			},
 _positioning:function(){

 }
 
 };

 
$(document).ready(function(){

refference._animations.title();
//---------------------------
setTimeout("refference._animations.lists()",1000);
//---------------------------
$(".mainList").hover(function(){
	refference._animations.hoverExp(this);		
});
//---------------------------

$(".mainList").click(function(){
	refference._animations.fullScreen(this);		
});
//---------------------------
$(".more").toggle(
function(){ refference._animations.more(this);
 },
function(){ refference._animations.hide(this); });
		
});
