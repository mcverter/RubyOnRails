@layout('layouts.default')

@section('content')
<h1> {{ HTML::entities($author->name) }} </h1>
<p> {{ e($author->bio) }} </p>
<p> <small> {{ $author->updated_at }} </small></p>

<span> 

{{ HTML::link_to_route ('authors', 'Authors' ) }} | 
{{ HTML::link_to_route ('edit_author', 'Edit', array($author->id)) }} |


{{ Form::open('author/delete', 'DELETE', array('style'=>'display:inline;')) }}
{{ Form::token() }}

{{ Form::hidden('id', $author->id) }}
{{ Form::submit('Delete') }}
{{ Form::close() }}
</span>
@endsection
