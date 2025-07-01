import { Major } from '@prisma/client';
import { Prof, Technologie, User } from './helpersTypes';

export function listProfs(profs: Prof[]) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}

export function listTechnologies(technologies: Technologie[]) {
    const list = technologies.map((t) => `<li>${t.name}-${t.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}

export function listMajors(major: Major[]) {

    const list = major.map((t) => `
            <tr>
                <th scope="row">${t.code}</th>
                <td>${t.name}</td>
                <td class="colum-bt">
                    <i class="bi bi-eye fs-3 bt-page" onclick="redirect('major/read/${t.id}')"></i>
                    <i class="bi bi bi-pen fs-3 bt-page" onclick="redirect('major/update/${t.id}')"></i>
                    <i class="bi bi bi-trash fs-3 bt-page" onclick="deletarMajor('${t.id}')"></i>
                </td>
            </tr>
    `)

    return `${list.join('')}`

}


export function listMajorsToUser(major: Major[], majorId: string) {

    const list = major.map((m) => `
            <option value="${m.id}" ${m.id === majorId ? 'selected' : ''} >${m.name}</option>
    `)

    return `${list.join('')}`

}
export function listUsers(user: User[]) {

    const list = user.map((u) => `
            <tr>
                <td>${u.fullname}</td>
                <td>${u.email}</td>
                <td>${u.major.name}</td>
                <td class="colum-bt">
                    <i class="bi bi-eye fs-3 bt-page" onclick="redirect('user/read/${u.id}')"></i>
                    <i class="bi bi bi-pen fs-3 bt-page" onclick="redirect('user/update/${u.id}')"></i>
                    <i class="bi bi bi-trash fs-3 bt-page" onclick="deletarUser('${u.id}')"></i>
                </td>
            </tr>
    `)

    return `${list.join('')}`

}

