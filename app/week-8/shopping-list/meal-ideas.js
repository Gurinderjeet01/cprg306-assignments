import { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meal, setMeal] = useState([]);
    const fetchMealIdeas = async (ingredient) => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          return data.meals || [];
        } catch (error) {
          console.error('Error fetching meal ideas:', error);
          return [];
        }
      };
      const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeal(fetchedMeals);
      };
      useEffect(() => {
        loadMealIdeas();
      }, [ingredient]);
      return (
        <div>
          <h2>Meal Ideas</h2>
          <ul>
            {meal.map(meal => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        </div>
      );
}

export default MealIdeas;