const my_Back_Link = 'http://localhost:81/Trello/public/?controller=tache&action=';
                                    // CREATION DU BOUTON DEMARREUR
const body = document.querySelector('body');
    const demarrage = document.createElement('div');
    demarrage.setAttribute('class','demarrage_bouton')
        const logo_demarrage = document.createElement('img');
        logo_demarrage.setAttribute('src','mylogo.png');
    demarrage.appendChild(logo_demarrage);
body.appendChild(demarrage);
                                        // CREATION DU GENERATEUR
const first_container = document.createElement('div');
first_container.setAttribute('class','first_container');
                                // CREATION DE LA PARTIE COLONNE DU GENERATEUR
    const colonne = document.createElement('div');
    colonne.setAttribute('class','colonne');
        const colonne_icone = document.createElement('i');
        colonne_icone.classList.add('fa','fa-plus');
        const colonne_para = document.createElement('p');
        colonne_para.innerHTML = 'Colonne';
    colonne.append(colonne_icone,colonne_para);
                                //  CREATION DE LA PARTIE NOTE DU GENERATEUR
    const note = document.createElement('div');
    note.setAttribute('class','note');
        const note_icone = document.createElement('i');
        note_icone.classList.add('fa','fa-plus');
        const note_para = document.createElement('p');
        note_para.innerHTML = 'Note';
    note.append(note_icone,note_para);
                                //  CREATION DE LA PARTIE NOTE DU GENERATEUR
    const save = document.createElement('div');
    save.classList.add('save','note');
        const save_icone = document.createElement('i');
        save_icone.classList.add('fa','fa-plus');
        const save_para = document.createElement('p');
        save_para.innerHTML = 'Sauvegarder Etat';
    save.append(save_icone,save_para);
                            //  ATTRIBUTION DE LA COLONNE ET DE LA NOTE AU GENERATEUR
first_container.append(colonne,note,save);
body.append(first_container);
                                    //  BOUTON DE CREATION DU GENERATEUR

const derouler = document.querySelector('.first_container');  
const demarre = document.querySelector('.demarrage_bouton');                      
demarrage.addEventListener('click',() => 
{
    first_container.classList.toggle('first_container_deroule');
    first_container.classList.toggle('first_container');
})
                                    //  CREATION DU GENERATEUR DE COLONNE
const createurColonne = document.querySelector('.colonne');
                                //  ETAPE 1 : CREATION DU CONTENEUR DES COLONNES
const second_container = document.createElement('div');
second_container.setAttribute('class','second_container');
                            //  ETAPE 2 : CREATION D'UNE FONCTION DE CREATION DE COLONNE
let i = 0;
let j = 0;
let k = 0;
function blocRebuild() 
{
    const bloc = document.querySelectorAll('.bloc');
    for (let index = 0; index < bloc.length; index++) 
    {
        bloc[index].setAttribute('id',`${index}`);
    }
}
function inputRebuild() 
{
    const input = document.querySelectorAll('.myInputs');
    for (let index = 0; index < input.length; index++) 
    {
        input[index].innerText = `Colonne ${index + 1}`;
    }
}
function creationColonne()
{ 
        const bloc = document.createElement('div');
        bloc.setAttribute('class','bloc');
        bloc.setAttribute('id',`${i}`);
            const input = document.createElement('div');
            input.setAttribute('type','text');
            input.innerText = `Colonne ${i + 1}`;
            input.setAttribute('class','myInputs');
            const bloc_son = document.createElement('div');
            bloc_son.setAttribute('class','bloc_son');
                const task = document.createElement('div');
                task.setAttribute('class','task');
                const supprimer_div = document.createElement('div');
                supprimer_div.setAttribute('class',`supprimer`);
                supprimer_div.setAttribute('id',`supprimer${i}`);
                supprimer_div.setAttribute('onclick',`supprimer_colonne(${i})`);
                const supprimer_icone = document.createElement('i');
                supprimer_icone.classList.add('fa','fa-trash');
                supprimer_div.append(supprimer_icone);
            bloc_son.append(task,supprimer_div);
            const colors = 
            [
                'linear-gradient(#DAE2F8,#D6A4A4)',
                'linear-gradient(#F7F8F8,#ACBB78)',
                'linear-gradient(#2980B9,#6DD5FA,#FFFFFF)',
                'linear-gradient(#7F7FD5,#86A8E7,#91EAE4)',
                'linear-gradient(#a8c0ff,#3f2b96)'
            ];
        bloc.style.backgroundImage = 'url("mylogo.png") ,' + colors[j];
        bloc.append(input,bloc_son);   
        second_container.append(bloc);    
        body.append(second_container);
        i++;
        j++;
}
createurColonne.addEventListener('click', (e) => 
{
    if(second_container.children.length >= 5)
    {
        e.preventDefault();
    }
    else
    {
        creationColonne();
        notifier('Colonne cr??ee avec succ??s');
        moving();
        blocRebuild();
        inputRebuild();
        const myTitle = document.querySelectorAll('.myInputs');
        for(let i = 0; i < myTitle.length; i++)
        {
            myTitle[i].addEventListener('dblclick',() => 
            {                
                let input = document.createElement('input');
                input.setAttribute('class','myInpute');
                input.value = myTitle[i].innerText;
                myTitle[i].replaceWith(input);
                blocRebuild();
                inputRebuild();
            })
        }
    }   
})
function myValues(element,variable)
{
    for(let i = 0; i < element.length; i++)
    {
        variable = element[i].value;
    }
    return variable;
}
                                    //  CREATION DU GENERATEUR DES NOTES
const createurNote = document.querySelector('.note');
                                // EVENEMENT AU MOMENT OU L'ON CLIQUE SUR CREER NOTE
const popUp = document.querySelector('.pop_up');
const fermer = document.querySelector('.fa-close');
createurNote.addEventListener('click', (e) => 
{                   // LE FORMULAIRE EST DESACTIV?? LORSQU'IL N'Y A AUCUNE COLONNE
    if(second_container.children.length == 0)
    {
        e.preventDefault();
        notifier('Veuillez d\'abord cr??er une colonne');
    }
    else
    {
        ajouter.setAttribute('class','ajout');
        modif.setAttribute('class','modif');
        popUp.setAttribute('class','pop_up_affiche');
        fermer.addEventListener('click',() => 
        {
            popUp.setAttribute('class','pop_up');
        })
    }
})
const ajouter = popUp.querySelector('.ajout');
const modif = popUp.querySelector('.modif');
function clean()
{
    const clean_inputs = popUp.querySelectorAll('input');
    const clean_textarea = document.querySelectorAll('textarea');
    for(let i = 0; i < clean_inputs.length; i++)
    {
        clean_inputs[i].value = '';
    }
    for(let i = 0; i < clean_textarea.length;i++)
    {
        clean_textarea[i].value = '';
    }
}
ajouter.addEventListener('click',(e) => 
{
const task = document.querySelector('.task');
    const textarea = document.querySelectorAll('textarea');
    let textarea_value = '';
    textarea_value = myValues(textarea,textarea_value);
    const date = document.querySelectorAll('input[type=date]');
    let date_value = '';
    date_value = myValues(date,date_value);
    const begin = document.querySelectorAll('.begintime');
    let begin_value = '';
    begin_value = myValues(begin,begin_value);
    const end = document.querySelectorAll('.endtime');
    let end_value = '';
    end_value = myValues(end,end_value);
    let date_actuel = new Date().getTime();
    let date_de_debut = Date.parse(date_value + ' ' + begin_value);
    let date_de_fin = Date.parse(date_value + ' ' + end_value);
    if( textarea_value === '' || date_value === '' || begin_value === '' || end_value === '')
    {
        e.preventDefault();
        notifier('Veuillez d\'abord remplir tous les champs');
    }
    else if(date_de_debut < date_actuel)
    {
        notifier('Aucune date ant??rieure ?? celle d\'aujourd\'hui n\'est accept??e');
    }
    else if(date_de_debut >= date_actuel && date_de_fin <=  date_de_debut)
    {
        notifier('L\'heure de d??but doit ??tre sup??rieur ?? l\'heure de fin');
    }
    else
    {   
        task.prepend(myTask(textarea_value,date_value,begin_value,end_value));
        notifier('t??che cr??ee avec succ??s');
        moving();   
        clean();
        popUp.setAttribute('class','pop_up');
        const my_tache = document.querySelectorAll('.icone_content');
        for(let i = 0; i < my_tache.length; i++)
        {
            my_tache[i].addEventListener('mouseover',() => 
            {
                my_tache[i].nextSibling.setAttribute('class','myDescription_affiche');
            })
            my_tache[i].addEventListener('mouseout',() => 
            {
                my_tache[i].nextSibling.setAttribute('class','myDescription');
            })
        }
    }
})
function grandparent(element)
{
    return element.parentElement.parentElement;
}
function edit_myTask(id)
{
    ajouter.setAttribute('class','ajout_enleve');
    modif.setAttribute('class','modif_affiche');
    const my_task_toEdit = document.getElementById(`edit_task${id}`);
    const tache_actuelle = grandparent(my_task_toEdit);
    const text_to_edit = tache_actuelle.querySelector('.text');
    const date_to_edit = tache_actuelle.querySelector('.date');
    const beginH_to_edit = tache_actuelle.querySelector('.debut_heure');
    const endH_to_edit = tache_actuelle.querySelector('.fin_heure');

    my_task_toEdit.addEventListener('click',() => 
    {
        popUp.setAttribute('class','pop_up_affiche');

        const textarea = document.querySelector('textarea');
        const date = document.querySelector('input[type=date]');
        const begin = document.querySelector('.begintime');
        const end = document.querySelector('.endtime');

        textarea.value = text_to_edit.innerText;
        date.value = date_to_edit.innerText;
        begin.value = beginH_to_edit.innerText;
        end.value = endH_to_edit.innerText;
        
        fermer.addEventListener('click',() => 
        {
            popUp.setAttribute('class','pop_up');
        })
        modif.addEventListener('click',(e) =>
        {
            const textarea = document.querySelectorAll('textarea');
            let textarea_value = '';
            textarea_value = myValues(textarea,textarea_value);
            const date = document.querySelectorAll('input[type=date]');
            let date_value = '';
            date_value = myValues(date,date_value);
            const begin = document.querySelectorAll('.begintime');
            let begin_value = '';
            begin_value = myValues(begin,begin_value);
            const end = document.querySelectorAll('.endtime');
            let end_value = '';
            end_value = myValues(end,end_value);
            let date_actuel = new Date().getTime();
            let date_de_debut = Date.parse(date_value + ' ' + begin_value);
            let date_de_fin = Date.parse(date_value + ' ' + end_value);
            if( textarea_value === '' || date_value === '' || begin_value === '' || end_value === '')
            {
                e.preventDefault();
                notifier('Veuillez d\'abord remplir tous les champs');
            }
            else if(date_de_debut < date_actuel)
            {
                notifier('Aucune date ant??rieure ?? celle d\'aujourd\'hui n\'est accept??e');
            }
            else if(date_de_debut >= date_actuel && date_de_fin <=  date_de_debut)
            {
                notifier('L\'heure de d??but doit ??tre sup??rieur ?? l\'heure de fin');
            }
            else
            {   
                text_to_edit.innerText = textarea_value;
                date_to_edit.innerText = date_value;
                beginH_to_edit.innerText = begin_value;
                endH_to_edit.innerText = end_value;
                notifier('t??che modifi??e avec succ??s');
                moving();   
                clean();
                popUp.setAttribute('class','pop_up');
            }
        })
    }) 
}
function delete_myTask(id)
{
    const my_task_toDelete = document.getElementById(`delete_task${id}`);
    const corbeille = document.querySelector('.corbeille');
    let grandpa_corbeille = grandparent(my_task_toDelete);
    const bloc = grandparent(grandpa_corbeille).parentElement.id;
    const parent = document.getElementById(bloc);
    corbeille.append(grandpa_corbeille);
    notifier('T??che supprim??e avec succ??s');
    const restaurer = document.getElementById(`restore_task${id}`);
    restaurer.addEventListener('click',() => 
    {
        parent.lastChild.firstChild.prepend(grandparent(restaurer));
        moving()
        notifier('T??che restaur??e avec succ??s');
    });
    const trash = document.querySelector('.corbeille');
    const trash_droite = trash.querySelectorAll('.droite');
    const trash_gauche = trash.querySelectorAll('.gauche');
    for (let i = 0; i < trash_droite.length; i++) 
    {
        trash_droite[i].style.visibility = 'hidden';
    }
    for (let i = 0; i < trash_gauche.length; i++) 
    {
        trash_gauche[i].style.visibility = 'hidden';
    }
}   
function supprimer_colonne(id)
{
    const pop_suppression = document.querySelector('.delete_pop_up');
    pop_suppression.setAttribute('class','delete_pop_up_affiche');
    const confirmer = document.querySelector('#delete');
    const annuler = document.querySelector('#annuler');
    const supprimer = document.getElementById(`supprimer${id}`);
    let confirm = true;
    if(id == 0 && second_container.children.length > 1)
    {
        pop_suppression.setAttribute('class','delete_pop_up'); 
        notifier('Veuillez d\'abord supprimer toutes les colonnes');
    }
    else
    {
        confirmer.addEventListener('click',() => 
        {
            if(confirm)
            {
                grandparent(supprimer).remove();
                pop_suppression.setAttribute('class','delete_pop_up');
                moving();
                notifier('colonne supprim??e avec succ??s');
                blocRebuild();
                inputRebuild() 
                j = 0;
            }
        })
    }
    annuler.addEventListener('click',() => 
    {
        confirm = false;
        pop_suppression.setAttribute('class','delete_pop_up');
    })
}
function move(id,side)
{
    if(side == 'left')
    {
        let left = document.getElementById(`myTask_${id}`);
        let leftParent = grandparent(left).parentElement.id;
        let parentPrecedent = +(leftParent) - 1;
        document.getElementById(parentPrecedent).querySelector('.task').appendChild(left)
        moving();
    }
    else
    {
        let right = document.getElementById(`myTask_${id}`);
        let rightParent = grandparent(right).parentElement.id;
        let parentSuivant = +(rightParent) + 1;
        document.getElementById(parentSuivant).querySelector('.task').appendChild(right)
        moving();
    }
}
function myTask(tachePara = '',datePara = '',heure_debutPara = '',heure_finPara = '')
{
    const myTask = document.createElement('div');
    myTask.classList.add('myTask');
    myTask.setAttribute('id',`myTask_${k}`);
        const icones_content = document.createElement('div');
        icones_content.setAttribute('class','icone_content');
        const action = document.createElement('div');
        action.setAttribute('class','action');
            const icone_delete = document.createElement('i');
            icone_delete.classList.add('fa','fa-trash','kakashi');
            icone_delete.setAttribute('id',`delete_task${k}`)
            icone_delete.setAttribute('onclick',`delete_myTask(${k})`);
            const icone_restore = document.createElement('i');  
            icone_restore.classList.add('fa','fa-trash-restore','tobi');
            icone_restore.setAttribute('id',`restore_task${k}`);
            const icone_edit = document.createElement('i');
            icone_edit.classList.add('fa','fa-edit','kakashi');
            icone_edit.setAttribute('id',`edit_task${k}`)
            icone_edit.setAttribute('onclick',`edit_myTask(${k})`)
        action.append(icone_edit,icone_restore,icone_delete);
            const gauche = document.createElement('div');
            gauche.setAttribute('class','gauche');
                const gauche_icone = document.createElement('i');
                gauche_icone.classList.add('fa','fa-angle-double-left');
                gauche_icone.setAttribute('onclick',`move(${k},'left')`);
            gauche.append(gauche_icone);
            const text_div = document.createElement('div');
            text_div.setAttribute('class','text');
                const tache = document.createElement('h4');
                tache.innerText= tachePara;
            text_div.append(tache);
            const droite = document.createElement('div');
            droite.setAttribute('class','droite');
                const droite_icone = document.createElement('i');
                droite_icone.classList.add('fa','fa-angle-double-right');
                droite_icone.setAttribute('onclick', `move(${k},'right')`);
            droite.append(droite_icone);
        icones_content.append(gauche,text_div,droite);
    myTask.append(action,icones_content,myDescription(datePara,heure_debutPara,heure_finPara));
    k++;
    return myTask
}
function myDescription(datePara,heure_debutPara,heure_finPara)
{
    const myDescription = document.createElement('div');
    myDescription.setAttribute('class','myDescription');
    const date = document.createElement('h4');
    date.setAttribute('class','date');
    date.innerText = datePara;
    const heure_debut = document.createElement('h4');
    heure_debut.innerText = heure_debutPara;
    heure_debut.setAttribute('class','debut_heure');
    const heure_fin = document.createElement('h4');
    heure_fin.innerText = heure_finPara;
    heure_fin.setAttribute('class','fin_heure');
    myDescription.append(date,heure_debut,heure_fin);
    return myDescription;
}
const trash_menu = document.querySelector('.trash_menu');
const trash = document.querySelector('.trash');
const trash_icone = trash.querySelector('i');
trash_icone.addEventListener('click',() => 
{
    trash_menu.classList.toggle('trash_menu');
    trash_menu.classList.toggle('trash_menu_open');
    trash.classList.toggle('trash_return');
    trash.classList.toggle('trash')
})
function moving()
{
    const bloc = document.querySelectorAll('.bloc');
    for(let i = 0; i < bloc.length; i++)
    {
        if(bloc[i+1] == null)
        {
            const tacheDroite = bloc[i].querySelectorAll('.droite');
            for(let j = 0; j < tacheDroite.length; j++)
            {
                tacheDroite[j].style.visibility = 'hidden'
            }
        }
        else
        {
            const tacheDroite = bloc[i].querySelectorAll('.droite');
            for(let j = 0; j < tacheDroite.length; j++)
            {
                tacheDroite[j].style.visibility = 'visible'
            }
        }
        if(bloc[i-1] == null)
        {
            const tacheGauche = bloc[i].querySelectorAll('.gauche');
            for(let j = 0; j < tacheGauche.length; j++)
            {
                tacheGauche[j].style.visibility = 'hidden'
            }
        }
        else
        {
            const tacheGauche = bloc[i].querySelectorAll('.gauche');
            for(let j = 0; j < tacheGauche.length; j++)
            {
                tacheGauche[j].style.visibility = 'visible'
            }
        }
    }
}
const notification = document.querySelector('.notification');
const notifPara = notification.querySelector('h3');
function notifier(message)
{
    notifPara.innerText = message;
    notification.setAttribute('class','notification_affiche');
    setTimeout(() => 
    {
        notification.setAttribute('class','notification');
    }, 3000)
}

let time = setInterval(() => 
    {
        const mes_taches = document.querySelectorAll('.myTask');
        mes_taches.forEach((e) => 
        {
            const date = e.querySelector('.date').innerText;
            const mon_heure_debut = e.querySelector('.debut_heure').innerText;
            const mon_heure_fin = e.querySelector('.fin_heure').innerText;
    
            let date_actuel = new Date().getTime();
            let date_de_debut = Date.parse(date + ' ' + mon_heure_debut);
            let date_de_fin = Date.parse(date + ' ' + mon_heure_fin);
    
            let intervalle1 = date_de_debut - date_actuel;
            let intervalle2 = date_de_fin - date_actuel;
    
            if(intervalle1 <= 0)
            {
                e.classList.add('pulse');
                e.style.border = '4px solid green';
            }
            if(intervalle2 <= 0)
            {
                let my_icones = e.querySelectorAll('.kakashi');
                my_icones.forEach((e) => 
                {
                    e.classList.add('tobi');
                })
                let gauche = e.querySelector('.gauche');
                let droite = e.querySelector('.droite');
                gauche.style.visibility = 'hidden';
                droite.style.visibility = 'hidden';
                e.classList.remove('pulse');
                e.style.border = '4px solid gray';
            }
    
        });
},1000);

const save_state = document.querySelector('.save');
const mes_etats = document.querySelector('.mes_etats');
save_state.addEventListener('click',() =>   
{
    let saved_columns = [];

    const my_saved_blocs= document.querySelectorAll('.bloc');
    
    my_saved_blocs.forEach((colonne_actuelle) => 
    {
        if(colonne_actuelle.firstChild.value == undefined)
        {
            let myColumn = colonne_actuelle.firstChild.innerText;
            let conteneurTache = [];
            let mesTaches = colonne_actuelle.querySelectorAll('.myTask');
            mesTaches.forEach(tacheActuelle => 
                {
                    conteneurTache.push(
                        {
                            'Texte ' : tacheActuelle.querySelector('.text').innerText,
                            'Date ' : tacheActuelle.querySelector('.date').innerText,
                            'Heure de d??but ' : tacheActuelle.querySelector('.debut_heure').innerText,
                            'Heure de fin ' : tacheActuelle.querySelector('.fin_heure').innerText
                        }
                    )

                })
            saved_columns.push(     
                       {
                'Colonne' : myColumn,
                'Taches' : conteneurTache
            })
        }
        else
        {
            let myColumn = colonne_actuelle.firstChild.value;
            let conteneurTache = [];
            let mesTaches = colonne_actuelle.querySelectorAll('.myTask');
            mesTaches.forEach(tacheActuelle => 
                {
                    conteneurTache.push(
                        {
                            'Texte ' : tacheActuelle.querySelector('.text').innerText,
                            'Date ' : tacheActuelle.querySelector('.date').innerText,
                            'Heure de d??but ' : tacheActuelle.querySelector('.debut_heure').innerText,
                            'Heure de fin ' : tacheActuelle.querySelector('.fin_heure').innerText
                        }
                    )

                })
            saved_columns.push(     
                       {
                'Colonne' : myColumn,
                'Taches' : conteneurTache
            })
        }
    })
    fetch(my_Back_Link + 'ajouter',
        {
            method : "POST",
            body : JSON.stringify(saved_columns)
        })
    notifier('Etat Sauvegard?? avec succ??s');
});

fetch(my_Back_Link + 'restauration')
.then(myData => 
{
    return myData.json();
})
.then(json => 
{
    for (const key in json) 
    {
        let etat = document.createElement('h2');
        etat.setAttribute('class','mes_dates');
        etat.innerText =  key;
        mes_etats.append(etat);
    }
    const mes_dates_clique = document.querySelectorAll('.mes_dates');
    let last_state =  mes_dates_clique[mes_dates_clique.length - 1].innerText;
    let last_state_update = json[last_state].length - 1;
    json[last_state][last_state_update].forEach(colonnes => 
        {
            creationColonne();
            moving();
            const myTitle = document.querySelectorAll('.myInputs');
            for(let i = 0; i < myTitle.length; i++)
            {
                myTitle[i].addEventListener('dblclick',() => 
                {                
                    let input = document.createElement('input');
                    input.setAttribute('class','myInpute');
                    input.value = myTitle[i].innerText;
                    myTitle[i].replaceWith(input);
                    blocRebuild();
                    inputRebuild();
                })
            }
            myTitle[myTitle.length-1].innerText = colonnes['Colonne'];
            if(colonnes['Taches'].length === 0)
            {
                return;
            }
            else
            {
                colonnes['Taches'].forEach(tache => 
                    {
                        const task = document.querySelectorAll('.task');
                        task[task.length - 1].prepend(myTask(tache["Texte "],tache["Date "],tache["Heure de d\u00e9but "],tache["Heure de fin "]));
                        moving();   
                        clean();
                        popUp.setAttribute('class','pop_up');
                        const my_tache = document.querySelectorAll('.icone_content');
                        for(let i = 0; i < my_tache.length; i++)
                        {
                            my_tache[i].addEventListener('mouseover',() => 
                            {
                                my_tache[i].nextSibling.setAttribute('class','myDescription_affiche');
                            })
                            my_tache[i].addEventListener('mouseout',() => 
                            {
                                my_tache[i].nextSibling.setAttribute('class','myDescription');
                            })
                        }
                    })
            }
        })
    mes_dates_clique.forEach(element => 
    {
        element.addEventListener('click', () => 
        {
            second_container.innerHTML = '';
            blocRebuild();
            inputRebuild();
            j = 0;
            let length = json[element.innerText].length - 1;
            json[element.innerText][length].forEach(colonnes => 
                {
                    creationColonne();
                    notifier('??tat restaur??e avec succ??s');
                    moving();
                    const myTitle = document.querySelectorAll('.myInputs');
                    for(let i = 0; i < myTitle.length; i++)
                    {
                        myTitle[i].addEventListener('dblclick',() => 
                        {                
                            let input = document.createElement('input');
                            input.setAttribute('class','myInpute');
                            input.value = myTitle[i].innerText;
                            myTitle[i].replaceWith(input);
                            blocRebuild();
                            inputRebuild();
                        })
                    }
                    myTitle[myTitle.length-1].innerText = colonnes['Colonne'];
                    if(colonnes['Taches'].length === 0)
                    {
                        return;
                    }
                    else
                    {
                        colonnes['Taches'].forEach(tache => 
                            {
                                const task = document.querySelectorAll('.task');
                                task[task.length - 1].prepend(myTask(tache["Texte "],tache["Date "],tache["Heure de d\u00e9but "],tache["Heure de fin "]));
                                moving();   
                                clean();
                                popUp.setAttribute('class','pop_up');
                                const my_tache = document.querySelectorAll('.icone_content');
                                for(let i = 0; i < my_tache.length; i++)
                                {
                                    my_tache[i].addEventListener('mouseover',() => 
                                    {
                                        my_tache[i].nextSibling.setAttribute('class','myDescription_affiche');
                                    })
                                    my_tache[i].addEventListener('mouseout',() => 
                                    {
                                        my_tache[i].nextSibling.setAttribute('class','myDescription');
                                    })
                                }
                            })
                    }
                })
        })
    });
})

const autoSave = document.querySelector('.auto_save');
const saveCheck = document.querySelector('#save');
autoSave.addEventListener('click',() => 
{
    if(saveCheck.checked)
    {
        let time = setInterval(() => 
        {
            let saved_columns = [];
            const my_saved_blocs= document.querySelectorAll('.bloc');
            my_saved_blocs.forEach((colonne_actuelle) => 
            {
                if(colonne_actuelle.firstChild.value == undefined)
                {
                    let myColumn = colonne_actuelle.firstChild.innerText;
                    let conteneurTache = [];
                    let mesTaches = colonne_actuelle.querySelectorAll('.myTask');
                    mesTaches.forEach(tacheActuelle => 
                        {
                            conteneurTache.push(
                                {
                                    'Texte ' : tacheActuelle.querySelector('.text').innerText,
                                    'Date ' : tacheActuelle.querySelector('.date').innerText,
                                    'Heure de d??but ' : tacheActuelle.querySelector('.debut_heure').innerText,
                                    'Heure de fin ' : tacheActuelle.querySelector('.fin_heure').innerText
                                }
                            )
                        })
                    saved_columns.push(     
                        {
                            'Colonne' : myColumn,
                            'Taches' : conteneurTache
                        })
            }
            else
            {
                let myColumn = colonne_actuelle.firstChild.value;
                let conteneurTache = [];
                let mesTaches = colonne_actuelle.querySelectorAll('.myTask');
                mesTaches.forEach(tacheActuelle => 
                    {
                        conteneurTache.push(
                            {
                                'Texte ' : tacheActuelle.querySelector('.text').innerText,
                                'Date ' : tacheActuelle.querySelector('.date').innerText,
                                'Heure de d??but ' : tacheActuelle.querySelector('.debut_heure').innerText,
                                'Heure de fin ' : tacheActuelle.querySelector('.fin_heure').innerText
                            })
                    })
                saved_columns.push(     
                        {
                            'Colonne' : myColumn,
                            'Taches' : conteneurTache
                        })
            }
        })
        fetch(my_Back_Link + 'ajouter',
            {
                method : "POST",
                body : JSON.stringify(saved_columns)
            })
        }, 10000);
        notifier('Mode autosave activ??'); 
    }
    else
    {
        notifier('Mode autosave desactiv??'); 
        clearInterval(time);
    }
})

