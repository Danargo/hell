function signin(){
						var username = document.getElementById("username").value;
						var password = document.getElementById("password").value;
						
						if(username=="admin" && password=="admin") {
						location.href = "file:///storage/emulated/0/WhatsApp/Media/WhatsApp%20Documents/2.html";
						}
						else if(username=="" && password==""){
						document.getElementById("result").innerHTML = "masukan username dan password anda";
						}
						else {
						document.getElementById("result").innerHTML = "username atau password salah";
						}
						}
						
						function firedusr() {						document.getElementById("result").innerHTML = "";		
						document.getElementById("username").value="";				
					}
					function firedpw() {						document.getElementById("result").innerHTML = "";		
						document.getElementById("password").value="";				
					}
					
