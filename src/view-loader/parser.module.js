const $ = require('jquery');
const path = require('path');
const fs = require('fs');

class DynamicModule{
    
    constructor(renderPath, props = {}){
        this.renderPath = path.join(__dirname, '..', renderPath);
        this.initComponentDidMount();        
        this.props = props;
    }

    initComponentDidMount(){
        $(()=>{
            this.componentDidMount();
            if(fs.existsSync(this.renderPath)){
                this.html = fs.readFileSync(this.renderPath, 'utf8').replace(/\n/g, "").trim();                
                console.log(this.renderPath, 'LOADED');
            }else{
                console.log(this.renderPath, fs.existsSync(this.renderPath), 'NOT LOADED')
            }            
        });
    }

    getHTML(){
        if(this.props != {}){
            console.log(this.html);
            
            if(this.html.match(/\{(.*?)\}/g)){
                this.html = this.html.replace(/\{(.*?)\}/g, this.props['src'])
                console.log(this.props)
            }
        }
        return this.html;
    }

    componentDidMount(){}

}

module.exports = DynamicModule;