import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
        
        <ApprovalCard>
            <CommentDetail 
                author="alex1" 
                fecha="Lunes" 
                comentarios="comentario 11" 
                avatar= {faker.image.avatar()}
                />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="alex2" 
                fecha="Mircoles" 
                comentarios="comentario 22" 
                avatar= {faker.image.avatar()}
                />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="alex3" 
                fecha="Viernes" 
                comentarios="comentario 33" 
                avatar= {faker.image.avatar()}
                />
        </ApprovalCard>

    
         
        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));