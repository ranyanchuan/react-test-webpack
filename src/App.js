import React from 'react';
import  ReactInput from "./ReactInput";
import  ReactTable from "./ReactTable";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.getDataSource(),
    }
}

coachDataSource=null; 

//  定义表结构
columns = [
  {
      title: "姓名",
      dataIndex: "name",
      key:"name",
  },
  {
      title: "年龄",
      dataIndex: "age",
      key:"age",
      textAglint:"right"
  },
  {
      title: "地址",
      dataIndex: "address",
      key:"address",
  },
  {
      title: "公司",
      dataIndex: "company",
      key:"company",
  },
]


getDataSource=()=>{


   let name1List=["张","李","孙","王","冯"];
   let name2List=["国","光","广","海","倍"];

   let dataSource=[];
   let i=0;
   while(i<20){
     
    let name1=name1List[(Math.floor(Math.random()*5))];
    let name2=name2List[(Math.floor(Math.random()*5))];
    let name3=name2List[(Math.floor(Math.random()*5))];
    dataSource.push({
        id:i,
        name: [name1,name2,name3].join(""),  // 3个以上建议用数组连接
        age: 20,
        address: `北京海淀区xxxx ${i}号楼`,  // es6 语法 
        company: "一汽",
    })
    i++;
   }

   this.coachDataSource=dataSource;
   return dataSource
}


  onSearch=(value)=>{
     console.log("value",value);
     if(value){
         const {dataSource}=this.state;
         let newDataSource=[];
         // 查询 name
         for(let item of dataSource){
              if(item.name.includes(value)){
                newDataSource.push(item);
              }
         }
         this.setState({dataSource:newDataSource});
     }else{
      const dataSource=this.coachDataSource;
      this.setState({dataSource});
     }
  }



   render(){

     return (
       <div>
         <div style={{
           textAlign:'center',
           marginTop:20,
           paddingBottom:20
         }}>
         <ReactInput 
           onSearch={this.onSearch}
           onClick={this.onSearch}
         />
         </div>
         <ReactTable dataSource={this.state.dataSource} columns={this.columns}/>
       </div>
     )
   }   
}


export default App;
