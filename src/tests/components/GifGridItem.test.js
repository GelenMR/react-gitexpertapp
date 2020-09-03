import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en componente <GifGridItem />', () => {
    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('Debe de mostrar en componente correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        console.log(img.html());
        console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate__zoomIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__zoomIn') ).toBe( true );
    })
    
    
});
