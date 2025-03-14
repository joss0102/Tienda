import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/auth/token.service';
import { UserInfoService } from '../../services/service/user-info.service';
import { UserService } from '../../services/service/user.service'; // Importa UserService
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any = null;
  loading: boolean = true;
  formattedDate: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  newFirstName: string = '';
  newLastName: string = '';
  newAddress: string = '';
  configModalOpen: boolean = false;

  constructor(
    private userInfoService: UserInfoService,
    private tokenService: TokenService,
    private userService: UserService // Inyectamos el servicio
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getAccessToken();
    if (token) {
      const decodedToken = this.tokenService.decodeToken(token);
      const userId = decodedToken?.userId;  

      if (userId) {
        this.userInfoService.getUserInfoByUserId(userId).subscribe(
          (data) => {
            this.userInfo = data;
            this.formattedDate = this.formatDate(this.userInfo.createdAt);
            this.loading = false;
            this.newFirstName = this.userInfo.firstName;
            this.newLastName = this.userInfo.lastName;
            this.newAddress = this.userInfo.address;
          },
          (error) => {
            console.error('Error al obtener la información del usuario:', error);
            this.loading = false;
          }
        );
      } else {
        console.error('No se encontró el userId en el token');
        this.loading = false;
      }
    } else {
      console.error('No se encontró el token');
      this.loading = false;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  // Abrir modal para editar datos
  openConfigModal(): void {
    this.configModalOpen = true;
  }

  // Cerrar modal
  closeConfigModal(): void {
    this.configModalOpen = false;
  }

  // Guardar cambios de perfil y contraseña
  saveChanges(): void {
    if (this.newPassword === this.confirmPassword) {
      const userId = this.userInfo.user.id;

      const updatedUserData = {
        firstName: this.newFirstName,
        lastName: this.newLastName,
        address: this.newAddress,
        password: this.newPassword,
      };

      this.userService.updateUser(userId, updatedUserData).subscribe(
        (response) => {
          console.log('Datos actualizados con éxito:', response);
          alert('Perfil actualizado correctamente');
          this.closeConfigModal();
        },
        (error) => {
          console.error('Error al actualizar los datos del usuario:', error);
          alert('Error al actualizar los datos');
        }
      );
    } else {
      console.error('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
    }
  }

  // Cambiar contraseña
  changePassword(): void {
    if (this.newPassword === this.confirmPassword) {
      if (this.userInfo && this.userInfo.user && this.userInfo.user.id) {
        const userId = this.userInfo.user.id;

        this.userService.changePassword(userId, this.oldPassword, this.newPassword).subscribe(
          (response) => {
            console.log('Contraseña cambiada con éxito:', response);
            alert('Contraseña cambiada correctamente');
            // Limpiar los campos
            this.oldPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';
          },
          (error) => {
            console.error('Error al cambiar la contraseña:', error);
            alert('Error al cambiar la contraseña');
          }
        );
      } else {
        console.error('No se pudo obtener el ID del usuario');
        alert('No se pudo obtener la información del usuario');
      }
    } else {
      console.error('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
    }
  }
}
