let api = "https://606be8dff8678400172e6bb8.mockapi.io/sinhvien";

function start(){

}

function getAPI(){

}

fetch("https://606be8dff8678400172e6bb8.mockapi.io/sinhvien")
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let listSinhVien=data.map((sinhvien)=>{
            return sinhvien
        })
        
    })

