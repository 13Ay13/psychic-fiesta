
			//Enables the picker to select a pixel to start colouring
			var start = 0;
			var startPixel_x = startPixel_y =0;
			var grid = [];
			var max_XIndex = max_YIndex=0

			function enablePicker(){
				start = 1;
				if(start ==1){
					document.getElementById("status").innerHTML = "Yes";
				}

				

			}

			function startFill(){
				//Only if the Start pixel is selected
				if(start==1){
					boundryFill(startPixel_x,startPixel_y);
				}
			}


			function boundryFill(x,y){
				if(grid[y][x].id != "4" && grid[y][x].id != "1"){
					//Not Completed
					var fillColor = "#f00";
					colorPixel(x,y,fillColor)

					if(x+1<=max_XIndex){
						boundryFill(x+1,y);
						
					}
					if(x-1>=0 && x-1<=max_XIndex){
						boundryFill(x-1,y);
					
					}
					if(y-1>=0 && y-1<=max_YIndex){
					boundryFill(x,y-1);
					}
					if(y+1<=max_YIndex){
						boundryFill(x,y+1);
					}
				}
			}


			function printRowId(rcv){
				alert("Row Id : " + rcv.rowIndex);
			}

			function work(rcv){
				alert("Cell : " + this.cellIndex + " Row : " + this.parentNode.rowIndex);
			}

			function getData(){

				var rows = document.getElementById("rows").value;
				var cols = document.getElementById("cols").value;
				
				drawGrid(rows,cols);

				max_XIndex = rows - 1;
				max_YIndex = cols - 1;

			}

			function test(){
				alert("Hey");
			}

			function colorPixel(x,y,color){
				grid[y][x].style.background = color;
				grid[y][x].id = "4";
			}
			
			function drawGrid(rows, cols){
				//Create an Array to store the table row and cell references
				
				var size = "30px";
				var table = document.getElementById("grid");

				for(var i=0;i<rows;i++){
					grid[i] = [];
					var row_temp = table.insertRow(i); 
					for(var j=0;j<cols;j++){
						grid[i][j] = row_temp.insertCell(j);
						grid[i][j].style.width = size;
						grid[i][j].style.height = size;
						grid[i][j].id = "0";

						

						// 0 - Default , 1 - Clicked, 2 - Hover, 3 - Clicked and Hover 4 -  Completed
						grid[i][j].addEventListener("click",function(){
							//Pixel Selector is Not Enabled
							if(start == 0){
								//Mark Pixel as Clicked
								if(this.id == "2"){
									this.style.background = "#555";
									this.id = "1";
									
								}
								if(this.id == "2"){
									this.style.background = "#555";
									this.id = "1";
									
								}
							}else{
								//Pixel Selector is enabled
								startPixel_x = this.cellIndex;
								startPixel_y = this.parentNode.rowIndex;
								var color = "#0c0";
								//colorPixel(startPixel_x,startPixel_y,color);
								this.style.background = "#ccc";
								//this.id = "4";
							}

							
						});  
						
						grid[i][j].addEventListener("mouseover",function(){
							//Pixel Selector is Not Enabled
							if(start == 0){
								//Pixel at Default state
								if(this.id == "0"){
									this.style.background = "#000";
									this.id = "2"; //Mark it as Hover
								}
								else if (this.id == "1"){
									this.style.background = "#000";
									this.id = "3"; //Mark it as Clicked and Hover
								}

							}
							else{
								//Pixel Selector is enabled
							}
							
						});

						grid[i][j].addEventListener("mouseout",function(){
							//Pixel Selector is Not Enabled
							if(start == 0){
								//Pixels not Clicked but Hover state
								if(this.id == "2"){
									this.id = "0"; //Revert to default
									this.style.background = "#fff";
									
								}
								//Mouse out from a Clicked Pixel
								else if (this.id ="3"){
									this.id = "1";
									this.style.background = "#555";
								}
							}else{
								//Pixel Selector is enabled
							}

						});

						
						

					}
				}
			}
