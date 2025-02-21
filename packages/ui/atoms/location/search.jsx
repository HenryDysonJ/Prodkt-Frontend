import React from 'react';
import './index.css';
import { loadScript } from './loadScriptFile';
import { TextFieldAdornment } from './textFieldAdornment';
let autoComplete;

const SearchLocationInput = (props) => {
  const { handleChange, value, placeholder = '', parent_id, textFieldComponent } = props;

  const [query, setQuery] = React.useState('');
  const autoCompleteRef = React.useRef(null);

  React.useEffect(() => {
    loadScript(
      // `https://maps.googleapis.com/maps/api/js?key=${config.googleMapApiKey}&libraries=places`,
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1djjqNS2RDzmsA5Ryf2wgoH6_dse-DjA&libraries=places`,
      () => handleScriptLoad(autoCompleteRef),
    );
    // eslint-disable-next-line
  }, [autoCompleteRef?.current]);

  React.useEffect(() => {
    setQuery(value ? value : '');
  }, [value]);

  const handleScriptLoad = (autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current);
    // REFER THIS FOR PLACES FIELDS
    // https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult
    autoComplete.setFields(['address_components', 'formatted_address', 'geometry']);
    autoComplete.addListener('place_changed', () => {
      const addressObject = autoComplete?.getPlace();

      if (addressObject) {
        let _obj = {};
        _obj['address'] = addressObject?.formatted_address;
        _obj['latitude'] = addressObject?.geometry?.location?.lat();
        _obj['longitude'] = addressObject?.geometry?.location?.lng();
        _obj['city'] =
          addressObject?.address_components?.find((comp) => comp?.types?.includes('locality'))?.long_name ||
          addressObject?.address_components?.[1]?.long_name ||
          '';
        _obj['location'] =
          addressObject?.address_components?.find(
            (comp) =>
              comp?.types?.includes('administrative_area_level_2') ||
              comp?.types?.includes('administrative_area_level_1'),
          ).long_name ||
          addressObject?.address_components?.[0]?.long_name ||
          '';
        
        handleChange(_obj);
        setQuery(_obj.address);
      }
    });
  };

  return (
    <div>
      {textFieldComponent ? (
        textFieldComponent(autoCompleteRef, query, setQuery)
      ) : (
        <TextFieldAdornment
          id={`${parent_id}_location_search_textfield_input`}
          inputRef={autoCompleteRef}
          handleChange={(e) => setQuery(e.target.value)}
          value={query ? query : ''}
          // adornment={<LocationIcon />}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default SearchLocationInput;
