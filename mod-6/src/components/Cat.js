import React from 'react';
import { useParams, Prompt } from 'react-router-dom';
import imgSrc from './cat.jpg';

export function Cat() {
  const params = useParams();

  return (
    <div>
      <h2>A cute cat</h2>
      <h3>The cat name is {params.catName ?? 'unknown'}</h3>
      <img src={imgSrc} alt="A cat" height="300" />
      <Prompt when={true} message="Are you sure" />
    </div>
  );
}
