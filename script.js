const title = document.querySelector("h1");
        let template = '';
        const one = [...title.textContent].forEach(e => template += `<span>${e}</span>` );
        
        title.innerHTML = template;


        const coba = (id,cb) => {
            const time = id === 1 ? 1000 : 2000;
            setTimeout(() => {
                const nama = id === 1 ? 'adit' : 'joni';
                cb(nama);
            },1000)
        }


        const woi = coba(1,(nama)=>{
            console.log(nama);
        });

        const text = 'test';
        console.log(text);

        
        console.log('mulai');
        const ggg = function (){
            let q = "";
            return async function (){
            for(let i = 1; i <= 1000000000; i++ ){
                q += '';
            }   
        }
        }

        const newer =ggg();
        newer();

        console.log('selelai');
        

    