 const idArr = [ 13, 1, 16 ];
    const objArr= [
      {
        id: 1,
        name: "cat"
      }, 
      {
        id: 10,
        name: "tiger", 
      }, 
      {
        id: 3,
        name: "dog", 
      }, 
      {
        id: 16,
        name: "bear", 
      }, 
      {
        id: 8,
        name: "fish", 
      }, 
      {
        id: 13,
        name: "goat", 
      }
    ];
    
    const idValueMap = objArr.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});
    console.log('idValueMap', idValueMap);
    let output = idArr.map((id) => idValueMap[id]);
    console.log(output);