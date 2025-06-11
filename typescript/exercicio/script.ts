
interface input extends HTMLElement {
  value?: number
}

function calculaRaio(): void{


    const inputRaio: input | null  = document.getElementById("raio");

    if(inputRaio!==null){

        const raio: number = inputRaio?.value || 0;

        const area: input | null = document.getElementById("area");
        const circ: input | null = document.getElementById("circ");

        if(area!==null){
            area.value = Math.PI*raio*raio
        }

        if(circ!==null){
            circ.value = Math.PI*2*raio;
        }
        
        

    }
    
}




