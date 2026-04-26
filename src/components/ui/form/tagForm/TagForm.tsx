import { type ChangeEvent } from 'react';

import "./TagForm.css"

interface GenresFormProps {
  genres_state: string[];
  genres_set: React.Dispatch<React.SetStateAction<string[]>>
  maxTags?: number;
}

const TagForm = ({ genres_state, genres_set, maxTags = 4 }:GenresFormProps) => {
  const handleInputChange = (index: number, value: string): void => {
    let newGenre = [...genres_state];
    newGenre[index] = value;

    if (index === genres_state.length - 1 && value.trim() !== '' && genres_state.length < maxTags) {
      newGenre.push('');
    }

    genres_set(newGenre);
  };

  const handleRemove = (index: number): void => {
    if (genres_state.length > 1) {
      genres_set(genres_state.filter((_, i) => i !== index));
    } else {
      genres_set(['']);
    }
  };

  const filledTagsCount = genres_state.filter(g => g.trim() !== "").length;

  return (
    <div className='genre-content'>
      {genres_state.map((genre, index) => (
        <div className='genre-input-wrapper' key={index}>
          <input
            type="text"
            className='genre-input'
            placeholder="Добавить тег..."
            required={filledTagsCount === 0 && index === 0}
            value={genre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
          />
          {genre && (
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className='genre-remove-btn'
            >
              ✕
            </button>
          )}
        </div>
      ))}
      
      <div className='genre-counter'>
        {genres_state.filter(g => g.trim() !== '').length} / {maxTags}
      </div>
    </div>
  );
};

export default TagForm;
