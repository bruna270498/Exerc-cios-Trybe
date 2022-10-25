import React from 'react';

class Texto extends React.Component {
    render() {
        const { value ,Salvar } =this.props;
        // let error = undefined;
        // if (value.length > 5)  error = "texto muito grande";

        return(
            <>
             <br /><textarea name="texto" value={value} onChange={ Salvar }></textarea>
             <span>{value === '' ? "texto muito grande": undefined}</span>
            </>
            )
        };
}
export default Texto;