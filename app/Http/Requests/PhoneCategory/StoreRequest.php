<?php

namespace App\Http\Requests\PhoneCategory;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'file' => 'required|mimes:jpeg,png,jpg',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:phone_categories,slug|regex:/^[a-zA-Z0-9-_]+$/',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */

    public function messages(): array

    {
        return [
            'file.required' => 'La imagen es requerida',
            'file.image' => 'El archivo debe ser una imagen',
            'file.mimes' => 'El archivo debe ser una imagen de tipo: jpeg,png,jpg,gif,svg',
            'file.max' => 'El archivo no debe ser mayor a 2048',
            'name.required' => 'El nombre es requerido',
            'description.max' => 'La descripción no debe ser mayor a 255 caracteres',
            'slug.required' => 'El slug es requerido',
            'slug.max' => 'El slug no debe ser mayor a 255 caracteres',
            'slug.unique' => 'El slug ya existe',
            'slug.regex' => 'El slug debe contener solo letras, números, guiones y guiones bajos',
        ];
    }
}
