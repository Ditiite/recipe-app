const validate = val => {
  const errors = {};

  if (!val.title) {
    errors.title = 'Title Name is required';
  }

  if (!val.cookingTime) {
    errors.cookingTime = 'Cooking time is required';
  }

  if (!val.alt) {
    errors.email = 'Image description is required';
  }

  if (!val.ingredients || val.ingredients.length === 0) {
    errors.ingredients = { _error: 'You have to add at least one ingredient.' };
  } else {

		const ingredientsArrayErrors = [];
		
    val.ingredients.forEach((ingredients, i) => {
			const ingredientsErrors= {};

			if (!ingredients || !ingredients.length) {
				ingredientsArrayErrors[i] = 'Ingredient field is Required';
			}

			if (!ingredients || !ingredients.amount) {
				ingredientsErrors.amount = '*';
				ingredientsArrayErrors[i] = ingredientsErrors;
			}
			
			if (!ingredients || !ingredients.measure) {
				ingredientsErrors.measure = '*';
				ingredientsArrayErrors[i] = ingredientsErrors;
			}

			if (!ingredients || !ingredients.ingredient) {
				ingredientsErrors.ingredient = '*';
				ingredientsArrayErrors[i] = ingredientsErrors;
			}
		})

    if (ingredientsArrayErrors.length) {
      errors.ingredients = ingredientsArrayErrors;
    }
	};

  if (!val.preparation || val.preparation.length === 0) {
    errors.preparation = { _error: 'You have to add at preparation.' };
  } else {
    const preparationArrayErrors = [];
    val.preparation.forEach((preparation, i) => {
			const	preparationErrors = {};

      if (!preparation || !preparation.length) {
        preparationArrayErrors[i] = 'Ingredient field is Required';
			}
			
			if (!preparation || !preparation.whatPrepare) {
				preparationErrors.whatPrepare = '*';
				preparationArrayErrors[i] = preparationErrors;
			}

			if (!preparation || !preparation.description) {
				preparationErrors.description = '*';
				preparationArrayErrors[i] = preparationErrors;
			}
		});
		
    if (preparationArrayErrors.length) {
      errors.preparation = preparationArrayErrors;
    }
  }

  return errors;
};

export default validate;