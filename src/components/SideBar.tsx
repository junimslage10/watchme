import { Button } from '../components/Button';
import '../styles/sidebar.scss'

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  selectedGenreId: number;
  handleClickButton(id: number): void;
}

export function SideBar({genres, handleClickButton, selectedGenreId} : SideBarProps) {
 return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
