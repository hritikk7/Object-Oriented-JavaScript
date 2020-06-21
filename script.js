////////////////////////////Object   Oriented    JavaScript //////////////////



        const circle = {
            radius: 2,
            location: {
                x: 2,
                y: 2
            },
            draw: function(){
                console.log('asdf');
                
            }
        }


        const car = {
            brand: 'ford',
            model: 'GT',
            features: {
                hp: 700,
                speed: {
                    speed: '444'
                }
            },
            start: function(){
                console.log('asdf');
                
            }
        }


        // factory function /////////////////////////////

        function createCircle(radius){
            return{
                radius: radius,
                draw: function(){
                    console.log('draw');
                }
            }
        }

//////////////////////constructor ///////////////////////
        // function Create(radius){
        //     this.radius = radius;
        //     this.draw = function(){
        //         console.log('draw');
        //     }
        // }
    
        // const create = new Create(1) 

//////////////////// values vs referene type /////////////////

        let x = 10; 
        let y = x;
        x = 20;

        // console.log('x = ', x);
        // console.log('y = ', y);
        
        // Example 2/////////

        let num = 2;
        function increase(num){
            console.log('num = ', num);
            num++;
            console.log('num = ', num);         
        }
        
        // increase(num)
        // console.log('num = ', num);
        


        let obj = {value: 10};
        function increase(obj){
            console.log('obj = ', obj);
            obj.value++;
            console.log('obj = ', obj);         
        }
        
        // increase(obj)
        // console.log('obj = ', obj);
        
        function Square(len){
            this.len = len;
            let defaultLocation = {x: 18, y: 20};
            
            this.getDefalutLocation = function(){
                return defalultLen
            }

            let computeLength = function(){
                //...
                console.log('asdf');
                
            }
            this.draw = function(){
                console.log('this is a square');                
                computeLength(11);
            }
        }

        const square = new Square(10);
        square.newLen = {newLen: 10}
        square.defaultLocation = 1;
        ///////////to access keys in the object ///////////
        
        for (let key in square){
            // console.log(key)
        }

        const keys = Object.keys(square);
        // console.log(keys);
        
        //////////////////ABSTRACTION using square example /////////////////

        // square.draw()

        Object.defineProperty(this, 'defaultLocation', {
            get: function(){
                return defaultLocation;
            },
            set: function(cat){
                defaultLocation = cat;
            }
        })

