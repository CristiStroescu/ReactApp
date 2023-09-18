export const listUsers = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Something went wrong with the get users service.");
};

export const retrieveUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong getting a user.");
};

export const createUser = async (payload) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if(response.ok){
        console.log("user created");
        return await response.json();
    }
    throw new Error("Something went wrong creating a user.");
}

export const updateUser = async (payload) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if(response.ok){
        console.log("user updated");
        return await response.json();
    }
    throw new Error("Something went wrong updating a user.");
}

export const deleteUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    console.log("user deleted");
    return await response.json();
  }
  throw new Error("Something went wrong deleting a user.");
};
