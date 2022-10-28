import React from 'react';

// export const AddContact = () => {
//   const
//   return (
//     <div className="ui main">
//       <h2>Add Contact</h2>
//       <form action="" className="ui form">
//         <div className="filed" style={{ marginBottom: '20px' }}>
//           <label htmlFor="name">
//             <h2>Name</h2>
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             onChange={(event) => {
//               this.setState({ name: event.target.value });
//             }}
//           />
//         </div>
//         <div className="filed" style={{ marginBottom: '20px' }}>
//           <label htmlFor="email">
//             <h2>Email</h2>
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={state.name}
//             onChange={(event) => {
//               this.setState({ email: event.target.value });
//             }}
//           />
//         </div>
//         <button className="ui button blue">Add</button>
//       </form>
//     </div>
//   );
// };

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };
  add = (eve) => {
    eve.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      alert('All the Fields are mandatory!');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
    console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" className="ui form" onSubmit={this.add}>
          <div className="filed" style={{ marginBottom: '20px' }}>
            <label htmlFor="name">
              <h2>Name</h2>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </div>
          <div className="filed" style={{ marginBottom: '20px' }}>
            <label htmlFor="email">
              <h2>Email</h2>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
