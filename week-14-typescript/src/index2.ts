/* 
  Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

  readonly - doesnt allow changing values within a const obj/array...
 

  interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
  }

  type UpdatedProps = Pick<User, "name" | "age" | "email">;
  // make properties optional
  type UpdatedPropsOptional = Partial<UpdatedProps>;

  function updateData(updatedProps: UpdatedPropsOptional) {
    // hit the db to update user
  }
*/

/* 
  Record and map - make handling objects easier


  type User = {
    id: string;
    username: string;
  };

  // type Users = {
  //   [key: string]: User;
  // };
  type Users = Record<string, User>;

  const users: Users = {
    huhu: {
      id: "huhu",
      username: "dhavit",
    },
    hehe: {
      id: "hehe",
      username: "shin",
    },
  };
*/

/*
  interface User {
  id: string;
  name: string;
  }

  // Initialize an empty Map
  const usersMap = new Map<string, User>();

  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
 */

/* 
  Exclude is the same as pick, just does the opposite
  type Event = 'click' | 'scroll' | 'mousemove';
  type ExcludeEvent = Exclude<Event, 'scroll'>; 

  const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
  };

  handleEvent('click');
 */
