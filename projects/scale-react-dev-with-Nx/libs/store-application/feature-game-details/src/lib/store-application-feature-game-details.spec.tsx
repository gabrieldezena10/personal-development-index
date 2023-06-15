import { render } from '@testing-library/react';

import StoreApplicationFeatureGameDetails from './store-application-feature-game-details';

describe('StoreApplicationFeatureGameDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreApplicationFeatureGameDetails />);
    expect(baseElement).toBeTruthy();
  });
});
