console.log('%c HI', 'color: firebrick')

    document.addEventListener('DOMContentLoaded', () => {
        //1. Dog images URL
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
        const imageContainer = document.getElementById('dog-image-container');
    
        // 2.Fetch dog images and display them
        fetch(imgUrl)
            .then(response => response.json())
            .then(data => {
                data.message.forEach(imageUrl => {
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = "Random Dog Image";
                    imageContainer.appendChild(img);
                });
            })
            .catch(error => console.error('Error fetching the images:', error));
    
        // 3,Dog breeds URL
        const breedUrl = "https://dog.ceo/api/breeds/list/all";
        const breedList = document.getElementById('dog-breeds');
    
        // 4.Fetch dog breeds and display them
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                const breeds = Object.keys(data.message);
                breeds.forEach(breed => {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    
                    // Challenge 3: Changing font color on click
                    li.addEventListener('click', () => {
                        if (li.style.color !== 'blue') {
                            li.style.color = 'blue';
                        } else {
                            li.style.color = 'black';
                        }
                    });
    
                    breedList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching the breeds:', error));
    
        // Challenge 4: Filtering  thr breeds by starting letter
        const breedDropdown = document.getElementById('breed-dropdown');
    
        breedDropdown.addEventListener('change', () => {
            const selectedLetter = breedDropdown.value.toLowerCase();
            const breedItems = breedList.getElementsByTagName('li');
    
            Array.from(breedItems).forEach(item => {
                const breedName = item.textContent.toLowerCase();
                if (breedName.startsWith(selectedLetter)) {
                    item.style.display = 'block'; // Showing breeds item
                } else {
                    item.style.display = 'none'; // Hiding breed itwm
                }
            });
        });
    });
    