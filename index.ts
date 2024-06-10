// Function to calculate total review stars
function calculateTotalStars(reviews: { stars: number }[]): number {
    let totalStars = 0;
    for (const review of reviews) {
        if (typeof review.stars === 'number') {
            totalStars += review.stars;
        } else {
            throw new Error('Invalid input: stars must be a number');
        }
    }
    return totalStars;
}

// Test data
const reviews = [
    { name: 'Sheia', stars: 5, loyaltyUser: true, date: '01-04-2021' },
    { name: 'Andrzej', stars: 3, loyaltyUser: false, date: '28-03-2021' },
    { name: 'Omar', stars: 4, loyaltyUser: true, date: '27-03-2021' },
];

// Display total stars
const reviewTotalDisplay = document.querySelector('#reviews');
if (reviewTotalDisplay) {
    try {
        const totalStars = calculateTotalStars(reviews);
        reviewTotalDisplay.textContent = `Total Stars: ${totalStars}`;
    } catch (error) {
        console.error(error.message);
    }
}
