export function filterData(data, condition){;

  let checksUser=[],
      dataFiltrada=[];

  for(let checkbox of condition) {
      checkbox.addEventListener('click', function(){
          if(this.checked == true){
              (this.value);
              checksUser.push(this.value);    

              data.forEach((el)=>{
                  (el['type'][0] === checksUser || el['type'][1] === checksUser)
                  ? dataFiltrada=data.push(this.value)
                  : dataFiltrada=dataFiltrada.filter(e => e !== this.value) 
                  console.log(dataFiltrada)
              }) 
              
          }else{
              checksUser=checksUser.filter(e => e !== this.value)
          }
     }) 
  }
}