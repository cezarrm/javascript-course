function Calculator () { 

    this.display = document.querySelector('.display');
    
    
    
    
    
    this.Start =() => {

        this.ClickButton();
        this.pressEnter();
        
    }
    

    this.pressEnter = () => {

        document.addEventListener('keyup', (e) => {

            if (e.key == 'Enter') {

                this.makeCount();
            }


        })


    }
    
    this.ClickButton = () => { 

        document.addEventListener('click', (e) => {
            const el = e.target;
            
           if(el.classList.contains('btn-num')) {
                this.addDisplay(el.inner    Text);
           }
           
           if(el.classList.contains('btn-clear')) {
            this.clearDisplay();
           }

           if(el.classList.contains('btn-del')) {
            this.deleteLast();
           }

           if(el.classList.contains('btn-eq')) {
            this.makeCount();
           }
         
        });
    };


    this.makeCount = () => {
        let count = this.display.value;

        try { 

            count = eval(count);
            
            if(!count) {
                alert('conta inválida!')
                return; 

            }

            this.display.value = String(count) //retorna valor da conta como string

        } catch(e){

            alert('Conta Inválida!')
            return;
        }

    }

    this.addDisplay = (value) => {

        this.display.value += value;

    }

    this.clearDisplay = () => {

        this.display.value = '';
        
    }

    this.deleteLast = () => {

        this.display.value = this.display.value.slice(0, -1);

    }
    
};



const calculator = new Calculator();

calculator.Start();