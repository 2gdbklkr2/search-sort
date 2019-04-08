function quickSort(origList) {
	if (origList.length <= 1) { 
		return origList;
	} else {

		var left = []; 
    var right = [];
    var newList= [];
		var pivot = origList.pop(); //remove and return elemnt of an array
		var length = origList.length; // get array length

		for (var i = 0; i < length; i++) {
			/*if first element of array is less than or equal to the pivot place it in the left array,
			  if not place it in the right array*/
			origList[i] <= pivot ? left.push(origList[i]) : right.push(origList[i]) ;
		}
		return newList.concat(quickSort(left), pivot, quickSort(right)); //take all the elements in the left array, the pivot , right array and put them in a new array
	}
}

var list = [12, 18 ,24 ,67, 4, 7, 9 ,9 ,3,5];
console.log("Original list: " + list);
console.log("Quick sort : " + quickSort(list));



// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  var middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  var left = arr.slice(0, middle) // items on the left side
  var right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
console.log("Merge sort: "+ mergeSort(list)) 
                          

function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return list
}
console.log("Insertion sort: " + insertionSort(list)) 


function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        let min = i; //  storing the index of minimum element

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j; // updating the index of minimum element
            }
        }

        if (i !== min) {
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
        }
    }
    return arr
}

console.log("Selection Sort: " + selectionSort(list)) 


function bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
              return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}

console.log("Bogosort: " + bogosort(list));