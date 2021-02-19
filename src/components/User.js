import React,{Component} from 'react';
import axios from "axios";
import Request from './lib/Request';

class User extends Component{
    render() {
        return (
            <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Image</td>
              <td>roundSeats</td>
              <td>Score</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data === undefined ? (
              <div />
            ) : (
              this.props.data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td><img scr={user.logo}/></td>
                  <td>{user.roundSeats}</td>
                </tr>
                
                
              ))
            )}
          </tbody>
        </table>
      </div>                       
        );  
    }
}
export default User;
