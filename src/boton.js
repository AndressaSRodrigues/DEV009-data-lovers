export function botonFilter(section,btn){
  const filterBtn = document.querySelector(btn),
    sectionFilter= document.querySelector(section);
    
  filterBtn.addEventListener('click', ()=>{

    if(sectionFilter.style.display==="none"){
      sectionFilter.style.display="block";
    }else{
      sectionFilter.style.display="none";
    }

  }) 
}

export function slideFilter(section, selectType, selectWeakness){
  const selectTypes=document.querySelector(selectType),
    selectWeaknesses=document.querySelector(selectWeakness),
    sectionFilter=document.querySelector(section);

  selectTypes.addEventListener('change', ()=>{
    sectionFilter.style.display="none"
  })

  selectWeaknesses.addEventListener('change', ()=>{
    sectionFilter.style.display="none"
  })
}

