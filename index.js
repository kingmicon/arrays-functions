//question2
let languages = ['c#', 'JavaScript', 'Ruby', 'PHP', 'Python' ];
languages.push('kotlin');
console.log(languages)
languages.splice(3, 0, 'Java');
console.log(languages)
languages.splice(0,1)
console.log(languages)
languages.unshift('scala', 'Swift');
console.log(languages)