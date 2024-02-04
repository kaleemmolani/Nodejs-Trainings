

export const ContactList = () => {
  const desc = 'this is contact list'
  const contactlist = [
    {
      name:"abc",
      age:23
    },
    {
      name:"xyz",
      age:24
    },    {
      name:"pqr",
      age:25
    },
    {
      name:"nmo",
      age:27
    },
  ]
  return (
    <div>
      {desc}
      <ul>
        {contactlist.map(contact=>(
          <div key={contact.name}>
            {contact.name}, {contact.age}
          </div>
        ))}
      </ul>
    </div>
  )
}
