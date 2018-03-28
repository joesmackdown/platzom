const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")

	})
	it('Si la palabra incia con Z se le añade "pe" al final', function(){
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")		
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir en la mitad y unir con un guion del medio', function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")		
	})
	it('Si la palabra original es un palidromo, ninguna regla anterior cuenta y devuelve la misma palabra intercalando mayusculas y minusculas', function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")		
	})
})