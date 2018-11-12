const imclib = {
    classificacao : function(valor) {
        if (valor < 17) {
            return "Muito abaixo do peso";
        } else {
            if (valor < 18.49) {
                return "Abaixo do peso";
            } else {
                if (valor < 24.99) {
                    return "Peso normal";
                } else {
                    if (valor < 29.99) {
                        return "Acima do peso";
                    } else {
                        if (valor < 34.99) {
                            return "Obesidade I";
                        } else {
                            if (valor < 39.99) {
                                return "Obesidade II (servera)";
                            } else {
                                if (valor >= 40)
                                    return "Obesidade III (mórbida)";
                                else
                                    return "";
                            }
                        }
                    }
                }
            }
        }
    },
    
    imc : function(altura, massa){
        return massa / (altura * altura);
    }

}
