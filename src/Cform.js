import React,{Component} from 'react';


class Cform extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            phonenumber:'',
            email:'',
            points:"",
            textarea:'',
            errors:{
                name:'',
                phonenumber:'',
                email:'',
                points:"",
                textarea:'',
            }
        };
    }

    handlesubmit = async (e) => {
        e.preventDefault();
       
        var errKeys = await Object.keys(this.state).filter((key) => {
          if (this.state[key] == '' && key != 'errors') {
            return key;
          }
        });
       
        if (errKeys.length >= 1) console.warn('Please fill all fields');
        else console.log(this.state);
       
      };
      
    
      

      validation(ename,evalue) {

        if(ename==='email')
        {
            let pattern = /^([a-zA-Z0-9_.])+\@([a-z])+\.([a-z])+$/;
            if(pattern.test(evalue))
            {
                return true;
            }
            else{
                return false;
            }
        }
          if(ename==='phonenumber')
        {
           for(var i=0;i<evalue.length;i++){
                if(!(evalue[i] >= '0' && evalue[i] <= '9'))
             {
        
                 break;
              
             }
           }
           if(i===evalue.length){
               return true;
           } else{
               return false;
           }
        }
     }

    handlechange = async(e)=>{
        var errors1 = { ...this.state.errors };
        
        if (e.target.value === '') {
          errors1[e.target.name] = 'Required';
        } else {
            var valid = this.validation(e.target.name,e.target.value)
            if(valid === false){
                errors1[e.target.name] = 'Invalid' + e.target.name;
            }else{
          errors1[e.target.name] = '';
            }
        } 
        
    
        
      await this.setState({errors:errors1,[e.target.name]: e.target.value });
        console.log(this.state);
    }

    render(){
        return(
            <>
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Name</label><br/>
                    <input type='text' name='name' value={this.state.name} onChange={this.handlechange}/>
                    <br/>
                <span style={{ color: 'red' }}>{' '}{this.state.errors.name}{' '}</span>
                </div>
                <br />
                <div>
                    <label>Email</label><br/>
                    <input type='text' name='email' value={this.state.email}  onChange={this.handlechange} />
                    <br/>
                <span style={{ color: 'red' }}>{' '}{this.state.errors.email}{' '}</span>
                </div>
                <br/>
                <div>
                    <label>Phonenumber</label> <br/>
                    <input type='text' name='phonenumber' maxLength='10' minLength='10' value={this.state.phonenumber}  onChange={this.handlechange}/>
                    <br/>
                <span style={{ color: 'red' }}>{' '}{this.state.errors.phonenumber}{' '}</span>
                </div>
                <br/>
                <div>
                   <label>Points</label> <br/><br/>
                   <label><input type="radio" name="points" value='1'  onChange={this.handlechange}/> 1</label>&nbsp;&nbsp;
                   <label><input type="radio" name="points" value='2'  onChange={this.handlechange}/> 2</label>&nbsp;&nbsp;
                   <label><input type="radio" name="points" value='3'  onChange={this.handlechange}/> 3</label>&nbsp;&nbsp;
                   <label><input type="radio" name="points" value='4'  onChange={this.handlechange} /> 4</label>&nbsp;&nbsp;
                   <label><input type="radio" name="points" value='5'  onChange={this.handlechange}/> 5</label>

                   <br/>
                <span style={{ color: 'red' }}>{' '}{this.state.errors.points}{' '}</span>
                </div><br/>
                <br/>
                <br/>
                <div>
                    <label>Textarea</label><br/>
                    <textarea name="textarea" value={this.state.textarea} onChange={this.handlechange}></textarea>
                   <span style={{ color: 'red' }}>{' '}{this.state.errors.textarea}{' '}</span>
                </div>
                <br/>
                <div>
                <button>Submit</button>
                <br/>
            
                </div>
            </form>
            </>
        )
    }
}

export default Cform;
