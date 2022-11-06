let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
    console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
    console.log('Papayas are $1.29');
} else {
    console.log('Invalid item');
}

// Compare this snippet from The Switch Keyword.js:

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
}

